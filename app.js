/* Dépannage informatique autonome : liste des problèmes → arbre de décision → fin
   (réglé / réparation nécessaire / hors garantie). Même rendu que La Distrib (design/ importé
   par outils/importer-design.js). Données : arbres.json (format cvdl-depannage) et config.json
   (textes). Aucun serveur, aucune donnée envoyée. */
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
  const $ = (s) => document.querySelector(s);
  const esc = (s) =>
    String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const texte = (s) => esc(s).replace(/\n/g, '<br>');
  const urlSure = (u) => (/^https:\/\//.test(u || '') ? u : '');

  /* Icônes et repères : mêmes dessins que depannage.js de La Distrib. */
  const ic = (d, t, e) =>
    `<svg viewBox="0 0 24 24" width="${t}" height="${t}" fill="none" stroke="currentColor" stroke-width="${e}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const FLECHE = ic('<path d="M5 12h14M13 6l6 6-6 6"/>', 18, 2.4);
  const RETOUR = ic('<path d="M19 12H5M11 18l-6-6 6-6"/>', 15, 2.5);
  const OK = ic('<path d="M20 6 9 17l-5-5"/>', 30, 2.6);
  const ATTENTION = ic('<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>', 30, 2.4);
  const AMPOULE = ic('<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z"/>', 18, 2);
  const VIDEO = ic('<rect x="2" y="5" width="15" height="14" rx="2"/><path d="m17 10 5-3v10l-5-3z"/>', 17, 2);
  const ecranSysteme = (gauche) =>
    `<svg class="dp-systeme" viewBox="0 0 48 34" width="48" height="34" aria-hidden="true"><rect x="1.5" y="1.5" width="45" height="31" rx="4" fill="#fff" stroke="currentColor" stroke-width="2"/><path d="M2.5 25h43v4.5a2 2 0 0 1-2 2h-39a2 2 0 0 1-2-2z" fill="color-mix(in srgb, currentColor 14%, #fff)" stroke="currentColor" stroke-width="1.5"/><rect x="${gauche ? 5 : 20.5}" y="26.3" width="7" height="4.4" rx="1.2" fill="${gauche ? '#3E9B3E' : '#00ACB0'}"/></svg>`;
  const REPERES = { 'windows 11': ecranSysteme(false), 'linux mint': ecranSysteme(true) };
  const illustration = (titre, taille) => window.illustrationCvdl('sym-' + (window.cleSymptomeCvdl(titre) || 'generique_sav'), taille);

  let config = {};
  let arbres = [];
  let etat = null; // { arbre, chemin, fini }

  /* ── Liste des problèmes ─────────────────────────────────────────────────────────── */
  function rendreListe() {
    $('#liste').innerHTML = arbres
      .map(
        (a) =>
          `<a class="carte-symptome" href="#${esc(a.identifiant)}"><span class="icone-symptome ill-symptome">${illustration(a.titre, 52)}</span><span>${esc(a.titre)}</span></a>`,
      )
      .join('');
  }

  /* ── Parcours (même balisage que CvdlDepannage.monter) ───────────────────────────── */
  function rendreParcours() {
    const { arbre, chemin, fini } = etat;
    const zone = $('#zone-depannage');
    const e = arbre.etapes[chemin[chemin.length - 1]];
    if (!e) {
      zone.innerHTML = '<div class="dp-carte"><p>Ce parcours est incomplet.</p></div>';
      return;
    }
    if (fini) {
      zone.innerHTML = `
        <div class="dp-carte dp-fin-ok" role="status">
          <span class="dp-rond-ok">${OK}</span>
          <h2 class="dp-titre">Tant mieux, c’est réglé&nbsp;!</h2>
          <p class="dp-texte">Si le problème revient, vous pourrez refaire ce parcours.</p>
          <div class="dp-actions">
            <a class="btn btn-primary" href="#">Retour aux problèmes</a>
            <button type="button" class="btn btn-secondary" data-dp="recommencer">Refaire le parcours</button>
          </div>
        </div>`;
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
    const autres = `<a class="btn btn-secondary" href="#">Voir les autres problèmes</a>`;
    let bas;
    if (e.fin === 'hors') {
      bas = `<div class="dp-hors" role="alert">
          <span class="dp-hors-ic">${ATTENTION}</span>
          <div><b>Généralement pas couvert par la garantie</b>
            <p>Les pannes dues à ${esc(MOTIFS_HORS[e.motif] || 'ce cas')} ne sont en principe pas couvertes : une réparation sera sans doute payante.</p></div>
        </div>
        <div class="dp-actions">${autres}</div>`;
    } else if (e.fin === 'resolu') {
      bas = `<div class="dp-conclusion dp-conclusion-ok"><span class="dp-rond-ok petit">${OK}</span><b>Le problème devrait être réglé.</b></div>
        <div class="dp-actions">
          <button type="button" class="btn btn-primary" data-dp="resolu">C’est réglé, merci</button>
          ${autres}
        </div>`;
    } else if (e.fin === 'sav' || !e.reponses.length) {
      bas = `<div class="dp-conclusion"><span data-ill="suiviSav" class="ill s"></span><b>${e.fin === 'sav' ? 'Une réparation est nécessaire.' : 'Où en êtes-vous ?'}</b></div>
        <div class="dp-actions">
          ${e.fin === 'sav' ? '' : '<button type="button" class="btn btn-primary" data-dp="resolu">C’est réglé</button>'}
          ${autres}
        </div>`;
    } else {
      bas = `<div class="dp-reponses" role="group" aria-label="Votre réponse">
        ${e.reponses.map((r, i) => `<button type="button" class="dp-reponse" data-dp-reponse="${i}"><span class="dp-reponse-l">${REPERES[r.libelle.trim().toLowerCase()] || ''}<span>${esc(r.libelle)}</span></span>${FLECHE}</button>`).join('')}
      </div>`;
    }
    zone.innerHTML = `
      <div class="dp-carte">
        <div class="dp-tete">
          <span class="dp-tete-ill">${illustration(arbre.titre, 56)}</span>
          <div class="dp-tete-txt">
            <div class="dp-surtitre">Dépannage · ${esc(arbre.titre)}</div>
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
        </div>
      </div>`;
    window.portailIllustrations(zone);
    focaliser();
  }
  function focaliser() {
    const c = $('#zone-depannage').querySelector('.dp-reponse, .btn-primary, .btn-secondary');
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
        $('#zone-depannage').scrollIntoView({ block: 'start', behavior: 'smooth' });
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
    }
  }

  /* ── Navigation (#identifiant-arbre, vide = liste) ─────────────────────── */
  function router() {
    const h = decodeURIComponent(location.hash.slice(1));
    const arbre = arbres.find((a) => a.identifiant === h);
    $('#accueil').hidden = !!h;
    $('#parcours').hidden = !arbre;
    if (arbre) {
      if (!etat || etat.arbre !== arbre) etat = { arbre, chemin: [arbre.depart], fini: false };
      rendreParcours();
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
    if (config.titre) document.title = config.titre;
    if (config.logo === false) $('.cvdl-entete').remove();
    $('#sous-titre').textContent = config.sousTitre || '';
    $('#zone-depannage').addEventListener('click', clicParcours);
    window.addEventListener('hashchange', router);
    rendreListe();
    router();
  }
  demarrer();
})();
