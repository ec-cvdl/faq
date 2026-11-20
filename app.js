/* Dépannage informatique autonome : liste des problèmes → arbre de décision → fin
   (réglé / contacter le SAV / hors garantie). Données : arbres.json (format cvdl-depannage)
   et config.json (textes, contacts SAV par région). Aucun serveur, aucune donnée envoyée. */
(function () {
  'use strict';
  const MOTIFS_HORS = {
    chute: 'une chute ou un choc',
    liquide: 'un liquide renversé',
    batterie: 'l’usure de la batterie',
    virus: 'un virus, une arnaque ou un logiciel malveillant',
    'mises-a-jour': 'les mises à jour du système ou des logiciels',
    application: 'une application ou un logiciel',
  };
  const CLE_REGION = 'depannage-region';
  const $ = (s) => document.querySelector(s);
  const esc = (s) =>
    String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const texte = (s) => esc(s).replace(/\n/g, '<br>');
  const urlSure = (u) => (/^https:\/\//.test(u || '') ? u : '');
  const sansAccents = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  const lireStock = (k) => {
    try {
      return localStorage.getItem(k) || '';
    } catch (e) {
      return '';
    }
  };
  const ecrireStock = (k, v) => {
    try {
      localStorage.setItem(k, v);
    } catch (e) {
      /* navigation privée : on ne retient pas la région */
    }
  };

  const ic = (d, t = 18, e = 2.4) =>
    `<svg viewBox="0 0 24 24" width="${t}" height="${t}" fill="none" stroke="currentColor" stroke-width="${e}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const FLECHE = ic('<path d="M5 12h14M13 6l6 6-6 6"/>');
  const RETOUR = ic('<path d="M19 12H5M11 18l-6-6 6-6"/>', 15, 2.5);
  const OK = ic('<path d="M20 6 9 17l-5-5"/>', 30, 2.6);
  const ATTENTION = ic('<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>', 30);
  const AMPOULE = ic('<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z"/>', 18, 2);
  const VIDEO = ic('<rect x="2" y="5" width="15" height="14" rx="2"/><path d="m17 10 5-3v10l-5-3z"/>', 17, 2);
  const OUTIL = ic('<path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3 17.8V21h3.2l6.3-6.3a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.6-.6-.6-2.6z"/>', 26, 2);
  /* Repère des réponses « Windows 11 » / « Linux Mint » : écran schématique, pas les logos. */
  const ecranSysteme = (gauche) =>
    `<svg class="dp-systeme" viewBox="0 0 48 34" width="48" height="34" aria-hidden="true"><rect x="1.5" y="1.5" width="45" height="31" rx="4" fill="#fff" stroke="currentColor" stroke-width="2"/><path d="M2.5 25h43v4.5a2 2 0 0 1-2 2h-39a2 2 0 0 1-2-2z" fill="#e3e8ec" stroke="currentColor" stroke-width="1.5"/><rect x="${gauche ? 5 : 20.5}" y="26.3" width="7" height="4.4" rx="1.2" fill="${gauche ? '#3E9B3E' : '#00ACB0'}"/></svg>`;
  const REPERES = { 'windows 11': ecranSysteme(false), 'linux mint': ecranSysteme(true) };

  let config = {};
  let arbres = [];
  let etat = null; // { arbre, chemin, fini }
  let dernierChemin = null; // { arbre, titres } pour le contact

  /* ── Liste des problèmes ─────────────────────────────────────────────────────────── */
  function rendreListe() {
    const f = sansAccents($('#filtre').value.trim());
    const visibles = arbres.filter(
      (a) => !f || sansAccents([a.titre, a.description, ...(a.symptomes || [])].join(' ')).includes(f),
    );
    $('#liste').innerHTML = visibles
      .map(
        (a) => `<a class="carte-pb" role="listitem" href="#${esc(a.identifiant)}">
          <span class="carte-pb-ic">${OUTIL}</span>
          <span class="carte-pb-txt"><b>${esc(a.titre)}</b>${a.description ? `<span>${esc(a.description)}</span>` : ''}</span>
          ${FLECHE}</a>`,
      )
      .join('');
    $('#aucun').hidden = visibles.length > 0;
  }

  /* ── Parcours ────────────────────────────────────────────────────────────────────── */
  function estHors(e) {
    return !!e && e.fin === 'hors';
  }
  function rendreParcours() {
    const { arbre, chemin, fini } = etat;
    const zone = $('#parcours');
    const e = arbre.etapes[chemin[chemin.length - 1]];
    if (!e) {
      zone.innerHTML = '<div class="dp-carte"><p>Ce parcours est incomplet.</p></div>';
      return;
    }
    if (fini) {
      zone.innerHTML = `<div class="dp-carte dp-fin-ok" role="status">
          <span class="dp-rond-ok">${OK}</span>
          <h2 class="dp-titre">Tant mieux, c’est réglé&nbsp;!</h2>
          <p class="dp-texte">Si le problème revient, vous pourrez refaire ce parcours ou contacter le SAV.</p>
          <div class="dp-actions">
            <a class="btn btn-primaire" href="#">Retour à la liste</a>
            <button type="button" class="btn btn-secondaire" data-dp="recommencer">Refaire le parcours</button>
          </div></div>`;
      focaliser();
      return;
    }
    const numero = chemin.length;
    const media =
      e.media && urlSure(e.media.url)
        ? e.media.type === 'video'
          ? `<a class="dp-video" href="${esc(e.media.url)}" target="_blank" rel="noopener noreferrer">${VIDEO}<span>Voir la vidéo${e.media.nom ? ' — ' + esc(e.media.nom) : ''}</span></a>`
          : `<figure class="dp-media"><img src="${esc(e.media.url)}" alt="${esc(e.media.nom || e.titre)}" loading="lazy"></figure>`
        : '';
    let bas;
    if (estHors(e)) {
      const batterie = e.motif === 'batterie';
      const sem = config.batterieSemaines;
      bas = `<div class="dp-hors" role="alert"><span class="dp-hors-ic">${ATTENTION}</span>
          <div><b>Généralement pas couvert par la garantie</b>
          <p>Les pannes dues à ${esc(MOTIFS_HORS[e.motif] || 'ce cas')} ne sont en principe pas couvertes${batterie && sem ? ` (sauf dans les ${esc(sem)} semaines qui suivent la remise de l’ordinateur)` : ''}. Vous pouvez quand même contacter le SAV pour un conseil ou un devis.</p></div></div>
        <div class="dp-actions"><button type="button" class="btn btn-secondaire" data-dp="sav">Contacter quand même le SAV ${FLECHE}</button></div>`;
    } else if (e.fin === 'resolu') {
      bas = `<div class="dp-conclusion dp-conclusion-ok"><span class="dp-rond-ok petit">${OK}</span><b>Le problème devrait être réglé.</b></div>
        <div class="dp-actions">
          <button type="button" class="btn btn-primaire" data-dp="resolu">C’est réglé, merci</button>
          <button type="button" class="btn btn-secondaire" data-dp="sav">Toujours en panne : contacter le SAV</button>
        </div>`;
    } else if (e.fin === 'sav' || !e.reponses.length) {
      bas = `<div class="dp-conclusion"><b>${e.fin === 'sav' ? 'Le SAV prend le relais.' : 'Où en êtes-vous ?'}</b></div>
        <div class="dp-actions">
          ${e.fin === 'sav' ? '' : '<button type="button" class="btn btn-secondaire" data-dp="resolu">C’est réglé</button>'}
          <button type="button" class="btn btn-primaire" data-dp="sav">Contacter le SAV ${FLECHE}</button>
        </div>`;
    } else {
      bas = `<div class="dp-reponses" role="group" aria-label="Votre réponse">${e.reponses
        .map(
          (r, i) =>
            `<button type="button" class="dp-reponse" data-dp-reponse="${i}"><span class="dp-reponse-l">${REPERES[r.libelle.trim().toLowerCase()] || ''}<span>${esc(r.libelle)}</span></span>${FLECHE}</button>`,
        )
        .join('')}</div>`;
    }
    const finale = ['sav', 'hors'].includes(e.fin) || (!e.reponses.length && !e.fin);
    zone.innerHTML = `<div class="dp-carte">
        <div class="dp-tete">
          <span class="dp-tete-ill">${OUTIL}</span>
          <div class="dp-tete-txt">
            <div class="dp-surtitre">${esc(arbre.titre)}</div>
            <div class="dp-fil">${chemin.map((_, i) => `<i class="${i === numero - 1 ? 'cours' : 'fait'}"></i>`).join('')}<span>Étape ${numero}</span></div>
          </div>
        </div>
        <h2 class="dp-titre">${esc(e.titre)}</h2>
        ${e.texte ? `<p class="dp-texte">${texte(e.texte)}</p>` : ''}
        ${media}
        ${e.astuce ? `<div class="dp-astuce">${AMPOULE}<span>${texte(e.astuce)}</span></div>` : ''}
        ${bas}
        <div class="dp-pied">
          <button type="button" class="btn-retour" data-dp="${numero > 1 ? 'precedent' : 'liste'}">${RETOUR}${numero > 1 ? 'Étape précédente' : 'Changer de problème'}</button>
          ${finale ? '' : '<button type="button" class="dp-passer" data-dp="sav">Passer et contacter le SAV</button>'}
        </div></div>`;
    focaliser();
  }
  function focaliser() {
    const c = $('#parcours').querySelector('.dp-reponse, [data-dp="resolu"], [data-dp="sav"], .btn-primaire');
    if (c) setTimeout(() => c.focus({ preventScroll: true }), 30);
  }
  function clicParcours(ev) {
    if (!etat) return;
    const r = ev.target.closest('[data-dp-reponse]');
    if (r) {
      const e = etat.arbre.etapes[etat.chemin[etat.chemin.length - 1]];
      const rep = e.reponses[+r.dataset.dpReponse];
      if (rep && etat.arbre.etapes[rep.cible]) {
        etat.chemin.push(rep.cible);
        rendreParcours();
        $('#parcours').scrollIntoView({ block: 'start', behavior: 'smooth' });
      }
      return;
    }
    const b = ev.target.closest('[data-dp]');
    if (!b) return;
    const a = b.dataset.dp;
    if (a === 'precedent') {
      etat.chemin.pop();
      rendreParcours();
    } else if (a === 'liste') {
      location.hash = '';
    } else if (a === 'recommencer') {
      etat.chemin = [etat.arbre.depart];
      etat.fini = false;
      rendreParcours();
    } else if (a === 'resolu') {
      etat.fini = true;
      rendreParcours();
    } else if (a === 'sav') {
      dernierChemin = {
        arbre: etat.arbre.titre,
        titres: etat.chemin.map((id) => etat.arbre.etapes[id].titre),
      };
      location.hash = 'contact';
    }
  }

  /* ── Contact SAV par région ──────────────────────────────────────────────────────── */
  function rendreContact() {
    const contacts = (config.contacts || []).filter((c) => c.region);
    const sel = $('#region');
    const memo = lireStock(CLE_REGION);
    sel.innerHTML =
      '<option value="">Choisir…</option>' +
      contacts.map((c) => `<option${c.region === memo ? ' selected' : ''}>${esc(c.region)}</option>`).join('') +
      '<option value="?">Autre / je ne sais pas</option>';
    $('#fiche').innerHTML = ficheContact(contacts.find((c) => c.region === sel.value));
    $('#rappel').innerHTML = dernierChemin
      ? `<b>À indiquer au SAV</b> — problème : ${esc(dernierChemin.arbre)}. Déjà essayé : ${dernierChemin.titres.map(esc).join(' → ')}.`
      : '';
  }
  function ficheContact(c) {
    const repli = config.repli || {};
    if (!c) {
      const lien = urlSure(repli.lien);
      return $('#region').value
        ? `<div class="fiche"><p>${esc(repli.texte)}</p>${lien ? `<a class="btn btn-primaire" href="${esc(lien)}" target="_blank" rel="noopener noreferrer">${esc(repli.libelleLien || 'En savoir plus')} ${FLECHE}</a>` : ''}</div>`
        : '';
    }
    const tel = String(c.telephone || '').replace(/[^\d+]/g, '');
    const site = urlSure(c.site);
    const lignes = [
      c.adresse && `<li><span>Adresse</span>${texte(c.adresse)}</li>`,
      c.horaires && `<li><span>Horaires</span>${texte(c.horaires)}</li>`,
      c.telephone && `<li><span>Téléphone</span><a href="tel:${esc(tel)}">${esc(c.telephone)}</a></li>`,
      c.email && `<li><span>E-mail</span><a href="mailto:${esc(c.email)}">${esc(c.email)}</a></li>`,
      site && `<li><span>Site</span><a href="${esc(site)}" target="_blank" rel="noopener noreferrer">${esc(site.replace(/^https:\/\//, ''))}</a></li>`,
    ].filter(Boolean);
    return `<div class="fiche"><h3>${esc(c.nom || c.region)}</h3>${lignes.length ? `<ul>${lignes.join('')}</ul>` : `<p>${esc(repli.texte)}</p>`}</div>`;
  }

  /* ── Navigation (#identifiant-arbre, #contact, vide = liste) ─────────────────────── */
  function router() {
    const h = decodeURIComponent(location.hash.slice(1));
    const arbre = arbres.find((a) => a.identifiant === h);
    $('#accueil').hidden = !!h;
    $('#parcours').hidden = !arbre;
    $('#contact').hidden = h !== 'contact';
    if (arbre) {
      if (!etat || etat.arbre !== arbre) etat = { arbre, chemin: [arbre.depart], fini: false };
      rendreParcours();
    } else if (h === 'contact') {
      rendreContact();
    } else {
      etat = null;
      if (h) location.hash = '';
    }
    window.scrollTo(0, 0);
  }

  async function demarrer() {
    try {
      const [a, c] = await Promise.all(['arbres.json', 'config.json'].map((u) => fetch(u).then((r) => r.json())));
      arbres = (a.arbres || []).filter((x) => !x.statut || x.statut === 'publie');
      config = c || {};
    } catch (e) {
      $('#liste').innerHTML = '<p>Impossible de charger les parcours (arbres.json, config.json).</p>';
      return;
    }
    if (config.titre) {
      $('#titre').textContent = config.titre;
      document.title = config.titre;
    }
    $('#sous-titre').textContent = config.sousTitre || '';
    $('#filtre').addEventListener('input', rendreListe);
    $('#parcours').addEventListener('click', clicParcours);
    $('#region').addEventListener('change', (ev) => {
      if (ev.target.value && ev.target.value !== '?') ecrireStock(CLE_REGION, ev.target.value);
      $('#fiche').innerHTML = ficheContact((config.contacts || []).find((c) => c.region === ev.target.value));
    });
    $('#retour-accueil').addEventListener('click', () => (location.hash = ''));
    window.addEventListener('hashchange', router);
    rendreListe();
    router();
  }
  demarrer();
})();
