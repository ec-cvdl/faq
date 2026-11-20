/* Extrait de portail-ui.js (La Distrib) par outils/importer-design.js : ne pas modifier ici. */
/* portail-ui.js — illustrations communes de l'espace public.
   Tout élément <span data-ill="nom" class="ill …"></span> reçoit son dessin (trait fin bleu nuit +
   aplat de couleur décalé). Styles dans portail.css. Aucune dépendance. */
(function () {
  const I = window.ILLUSTRATIONS_CVDL;

  /* ── Illustrations « objets » (produits, symptômes SAV) : SVG autonome (couleurs en ligne),
        utilisable aussi dans l'admin qui ne charge pas portail.css.
        window.illustrationCvdl(cle, taille) → chaîne SVG. Clés : prod-… et sym-… ── */
  const T = 'color-mix(in srgb, #00ACB0 45%, white)',
    M = 'color-mix(in srgb, #E62460 35%, white)',
    R = 'color-mix(in srgb, #E5484D 38%, white)';
  const F = 'var(--ill-fond, #fff)';
  const O = {
    'prod-laptop': [
      T,
      '<rect x="9" y="13" width="30" height="18" rx="3"/>',
      '<rect x="7" y="11" width="30" height="18" rx="3"/><path d="M3 33h38l-3 4H6z"/>',
    ],
    'prod-ecran': [
      T,
      '<rect x="9" y="9" width="32" height="22" rx="3"/>',
      '<rect x="7" y="7" width="32" height="22" rx="3"/><path d="M23 29v7M15 37h16"/>',
    ],
    'prod-telephone': [
      M,
      '<rect x="17" y="7" width="16" height="33" rx="4"/>',
      '<rect x="15" y="5" width="16" height="34" rx="4"/><path d="M21 34h4"/>',
    ],
    'prod-telephone_touches': [
      M,
      '<rect x="17" y="7" width="16" height="33" rx="4"/>',
      '<rect x="15" y="5" width="16" height="34" rx="4"/><rect x="18" y="9" width="10" height="9" rx="1.5"/><path d="M19 23h.01M23 23h.01M27 23h.01M19 27h.01M23 27h.01M27 27h.01M19 31h.01M23 31h.01M27 31h.01" stroke-width="3"/>',
    ],
    'prod-tablette': [
      T,
      '<rect x="11" y="7" width="28" height="34" rx="4"/>',
      '<rect x="9" y="5" width="28" height="36" rx="4"/><path d="M21 36h4"/>',
    ],
    'prod-sim': [
      M,
      '<path d="M15 8h14l8 8v26H15z"/>',
      '<path d="M13 6h14l8 8v26a2 2 0 0 1-2 2H13a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/><rect x="16" y="21" width="14" height="13" rx="2" fill="' +
        F +
        '"/><path d="M23 21v13M16 27.5h14"/>',
    ],
    'prod-recharge': [
      M,
      '<rect x="11" y="10" width="16" height="30" rx="4"/>',
      '<rect x="9" y="8" width="16" height="30" rx="4"/><path d="M15 33h4"/><path d="M36 10 29 22h8l-7 12" stroke-width="2.2"/>',
    ],
    'prod-souris': [
      T,
      '<rect x="17" y="11" width="18" height="29" rx="9"/>',
      '<rect x="15" y="9" width="18" height="30" rx="9"/><path d="M24 9v10"/>',
    ],
    'prod-clavier': [
      T,
      '<rect x="6" y="16" width="38" height="18" rx="3"/>',
      '<rect x="4" y="14" width="38" height="18" rx="3"/><path d="M10 20h2M16 20h2M22 20h2M28 20h2M34 20h2M10 25h2M16 25h2M22 25h2M28 25h2M34 25h2M15 29h16"/>',
    ],
    'prod-casque': [
      M,
      '<path d="M10 28a14 14 0 0 1 28 0v10H10z"/>',
      '<path d="M8 30v-4a16 16 0 0 1 32 0v4"/><rect x="6" y="28" width="8" height="12" rx="3" fill="' +
        F +
        '"/><rect x="34" y="28" width="8" height="12" rx="3" fill="' +
        F +
        '"/>',
    ],
    'prod-webcam': [
      T,
      '<circle cx="25" cy="21" r="12"/>',
      '<circle cx="23" cy="19" r="12"/><circle cx="23" cy="19" r="5"/><path d="M23 31v8M15 40h16"/>',
    ],
    'prod-station': [
      T,
      '<rect x="10" y="18" width="30" height="16" rx="3"/>',
      '<rect x="8" y="16" width="30" height="16" rx="3"/><path d="M13 24h4M21 24h4M29 24h4M12 37h22"/>',
    ],
    'prod-atelier': [
      M,
      '<rect x="8" y="8" width="30" height="20" rx="2"/>',
      '<rect x="6" y="6" width="30" height="20" rx="2"/><path d="M11 12h12M11 17h18"/><circle cx="14" cy="34" r="4"/><circle cx="32" cy="34" r="4"/><path d="M7 44a7 7 0 0 1 14 0M25 44a7 7 0 0 1 14 0"/>',
    ],
    'prod-feuille': [
      T,
      '<path d="M12 40C12 22 24 10 42 10c0 18-12 30-30 30z"/>',
      '<path d="M10 38C10 20 22 8 40 8c0 18-12 30-30 30z"/><path d="M10 38 28 20"/>',
    ],
    'prod-package': [
      M,
      '<path d="M10 17 24 10l14 7v16l-14 7-14-7z"/>',
      '<path d="M8 15 22 8l14 7v16l-14 7-14-7z"/><path d="M8 15l14 7 14-7M22 22v16"/>',
    ],
    'sym-alimentation': [
      R,
      '<circle cx="25" cy="27" r="14"/>',
      '<path d="M23 7v15"/><path d="M14.5 12.5a14 14 0 1 0 17 0"/>',
    ],
    'sym-ecran': [
      R,
      '<rect x="9" y="9" width="32" height="22" rx="3"/>',
      '<rect x="7" y="7" width="32" height="22" rx="3"/><path d="M23 29v7M15 37h16"/><path d="M17 11l5 6-4 3 5 6"/>',
    ],
    'sym-batterie': [
      R,
      '<rect x="7" y="17" width="32" height="16" rx="3"/>',
      '<rect x="5" y="15" width="32" height="16" rx="3"/><path d="M41 21v6"/><path d="M23 18l-5 5.5h6l-5 5.5" stroke-width="2.2"/>',
    ],
    'sym-clavier': [
      T,
      '<rect x="6" y="16" width="38" height="18" rx="3"/>',
      '<rect x="4" y="14" width="38" height="18" rx="3"/><path d="M10 20h2M16 20h2M22 20h2M28 20h2M34 20h2M10 25h2M16 25h2M22 25h2M28 25h2M34 25h2M15 29h16"/>',
    ],
    'sym-souris': [
      T,
      '<rect x="17" y="11" width="18" height="29" rx="9"/>',
      '<rect x="15" y="9" width="18" height="30" rx="9"/><path d="M24 9v10"/>',
    ],
    'sym-son': [
      M,
      '<path d="M10 20h7l9-7v26l-9-7h-7z"/>',
      '<path d="M8 18h7l9-7v26l-9-7H8z"/><path d="M31 18a8 8 0 0 1 0 12M35.5 13.5a14 14 0 0 1 0 21"/>',
    ],
    'sym-internet': [
      T,
      '<circle cx="25" cy="35" r="6"/>',
      '<path d="M6 19a26 26 0 0 1 36 0M12 26a17 17 0 0 1 24 0M18 32a8 8 0 0 1 12 0"/><circle cx="24" cy="37" r="2" fill="#002743"/>',
    ],
    'sym-virus': [
      R,
      '<circle cx="25" cy="25" r="12"/>',
      '<circle cx="23" cy="23" r="11"/><path d="M23 7v5M23 34v5M7 23h5M34 23h5M11.5 11.5l3.5 3.5M31 31l3.5 3.5M11.5 34.5 15 31M31 15l3.5-3.5"/><circle cx="19.5" cy="20" r="1.8"/><circle cx="26" cy="26" r="2.4"/>',
    ],
    'sym-mise_a_jour': [
      T,
      '<circle cx="25" cy="25" r="14"/>',
      '<path d="M36 17A14 14 0 0 0 10 21M10 29a14 14 0 0 0 26 4"/><path d="M36 9v8h-8M10 39v-8h8"/>',
    ],
    'sym-lenteur': [
      M,
      '<path d="M8 34a18 18 0 0 1 36 0z"/>',
      '<path d="M6 32a18 18 0 0 1 36 0"/><path d="M24 32l-8-9"/><circle cx="24" cy="32" r="2.5" fill="#002743"/><path d="M12 32h2M34 32h2M24 16v2"/>',
    ],
    'sym-surchauffe': [
      R,
      '<circle cx="24" cy="36" r="8"/>',
      '<path d="M18 30V10a5 5 0 0 1 10 0v20a8 8 0 1 1-10 0z"/><path d="M23 16v16"/><path d="M35 13c2.5 2.5 2.5 5.5 0 8M39.5 9.5c4.5 4.5 4.5 11.5 0 16"/>',
    ],
    'sym-mot_de_passe': [
      M,
      '<rect x="11" y="23" width="28" height="19" rx="3"/>',
      '<rect x="9" y="21" width="28" height="19" rx="3"/><path d="M15 21v-6a8 8 0 0 1 16 0v6"/><path d="M23 29v4"/><circle cx="23" cy="28" r="1.8" fill="var(--ill-fond)"/>',
    ],
    'sym-camera': [
      T,
      '<circle cx="25" cy="21" r="12"/>',
      '<circle cx="23" cy="19" r="12"/><circle cx="23" cy="19" r="5"/><path d="M23 31v7M15 40h16"/><path d="M8 6l30 30"/>',
    ],
    'sym-port': [
      T,
      '<path d="M16 18h20v8a10 10 0 0 1-20 0z"/>',
      '<path d="M18 6v10M28 6v10"/><path d="M13 16h20v8a10 10 0 0 1-20 0z"/><path d="M23 34v9"/>',
    ],
    'sym-application': [
      M,
      '<rect x="11" y="11" width="30" height="30" rx="5"/>',
      '<rect x="8" y="8" width="13" height="13" rx="3"/><rect x="25" y="8" width="13" height="13" rx="3"/><rect x="8" y="25" width="13" height="13" rx="3"/><rect x="25" y="25" width="13" height="13" rx="3" fill="var(--ill-fond)"/><path d="M28.5 28.5l6 6M34.5 28.5l-6 6"/>',
    ],
    'sym-choc': [
      T,
      '<path d="M25 9c6 9 10 14 10 20a10 10 0 0 1-20 0c0-6 4-11 10-20z"/>',
      '<path d="M23 7c6 9 10 14 10 20a10 10 0 0 1-20 0c0-6 4-11 10-20z"/><path d="M18 28l4 3-2 4 4 3"/>',
    ],
    'sym-impression': [
      T,
      '<rect x="9" y="19" width="32" height="15" rx="3"/>',
      '<path d="M14 17V7h18v10"/><rect x="7" y="17" width="32" height="15" rx="3"/><path d="M14 27h18v13H14z" fill="var(--ill-fond)"/><path d="M18 32h10M18 36h7"/><circle cx="33" cy="22" r="1.4" fill="#002743"/>',
    ],
    'sym-generique_sav': [
      R,
      '<rect x="8" y="12" width="26" height="18" rx="3"/>',
      '<rect x="6" y="10" width="26" height="18" rx="3"/><path d="M3 32h32"/><path d="M41.5 25.5a6 6 0 0 1-7.8 5.7l-7 7a2.1 2.1 0 0 1-3-3l7-7a6 6 0 0 1 5.7-7.8l-3.4 3.4.6 2.5 2.5.6z" fill="' +
        F +
        '"/>',
    ],
  };
  window.illustrationCvdl = function (cle, taille) {
    const d = O[cle] || O['prod-package'];
    const t = taille || 40;
    return `<svg class="ill-objet" viewBox="0 0 48 48" width="${t}" height="${t}" aria-hidden="true" style="overflow:visible;flex:none"><g fill="${d[0]}" stroke="none">${d[1]}</g><g fill="none" stroke="#002743" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${d[2]}</g></svg>`;
  };
  /** Clé d'illustration d'un produit (même logique de reconnaissance que l'admin et le portail). */
  window.cleIllustrationProduit = function (nom, icone) {
    const alias = {
      portable: 'laptop',
      fixe: 'ecran',
      telephone: 'telephone',
      telephone_touches: 'telephone_touches',
      tablette: 'tablette',
      sim: 'sim',
      recharge: 'recharge',
      atelier: 'atelier',
      souris: 'souris',
      feuille: 'feuille',
      laptop: 'laptop',
      ecran: 'ecran',
      clavier: 'clavier',
      casque: 'casque',
      webcam: 'webcam',
      station: 'station',
      package: 'package',
    };
    if (icone && alias[icone]) return 'prod-' + alias[icone];
    const n = String(nom || '').toLowerCase();
    if (/(sensibilisation|[ée]cologi|environnement)/.test(n)) return 'prod-feuille';
    if (/(atelier|animation)/.test(n)) return 'prod-atelier';
    if (/\bsim\b|carte sim/.test(n)) return 'prod-sim';
    if (/recharge|forfait/.test(n)) return 'prod-recharge';
    if (/souris/.test(n)) return 'prod-souris';
    if (/clavier/.test(n)) return 'prod-clavier';
    if (/casque/.test(n)) return 'prod-casque';
    if (/webcam/.test(n)) return 'prod-webcam';
    if (/station|dock/.test(n)) return 'prod-station';
    if (/touches?/.test(n)) return 'prod-telephone_touches';
    if (/(smartphone|t[ée]l[ée]phone|mobile)/.test(n)) return 'prod-telephone';
    if (/tablet/.test(n)) return 'prod-tablette';
    if (/([ée]cran|moniteur|fixe|bureau|desktop|tour)/.test(n)) return 'prod-ecran';
    if (/(portable|ordinateur|laptop|pc)/.test(n)) return 'prod-laptop';
    return 'prod-package';
  };

  function dessiner(el) {
    const def = I[el.dataset.ill];
    if (!def || el.dataset.illOk) return;
    el.classList.add('ill', def[0]);
    el.setAttribute('aria-hidden', 'true');
    el.innerHTML = `<svg viewBox="0 0 48 48"><g class="ill-fond">${def[1]}</g><g class="ill-trait">${def[2]}</g></svg>`;
    el.dataset.illOk = '1';
  }
  function tout(racine) {
    (racine || document).querySelectorAll('[data-ill]').forEach(dessiner);
  }
  window.portailIllustrations = tout;
  function demarrer() {
    tout();
    // Les pages reconstruisent souvent leur contenu en JS (listes, étapes) : on dessine aussi
    // les illustrations ajoutées après coup.
    new MutationObserver((mut) => {
      for (const m of mut)
        for (const n of m.addedNodes) {
          if (n.nodeType !== 1) continue;
          if (n.matches && n.matches('[data-ill]')) dessiner(n);
          if (n.querySelectorAll) n.querySelectorAll('[data-ill]').forEach(dessiner);
        }
    }).observe(document.body, { childList: true, subtree: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', demarrer);
  else demarrer();
})();

/* Clé d'illustration d'un symptôme SAV (portail et admin) — une seule règle. */
window.cleSymptomeCvdl = function (texte) {
  const t = String(texte || '').toLowerCase();
  if (/chauff|surchauff|bruit|ventil/.test(t)) return 'surchauffe';
  if (/mot de passe|compte|identifiant|code pin|verrouill/.test(t)) return 'mot_de_passe';
  if (/cam[ée]ra|webcam|micro(?!soft)/.test(t)) return 'camera';
  if (/port|usb|prise|connecteur|c[âa]ble/.test(t)) return 'port';
  if (/application|logiciel|appli\b|programme/.test(t)) return 'application';
  if (/tomb|chute|eau|liquide|renvers|choc/.test(t)) return 'choc';
  if (/imprim/.test(t)) return 'impression';
  if (/allum|d[ée]marr|power|mort/.test(t)) return 'alimentation';
  if (/[ée]cran|affich|cass/.test(t)) return 'ecran';
  if (/batter|charg|alimentation/.test(t)) return 'batterie';
  if (/clavier|touche/.test(t)) return 'clavier';
  if (/souris|pav[ée]|trackpad/.test(t)) return 'souris';
  if (/\bsons?\b|audio|haut-parleur/.test(t)) return 'son';
  if (/wi-?fi|internet|r[ée]seau|connexion/.test(t)) return 'internet';
  if (/virus|pirat|malveill|malware/.test(t)) return 'virus';
  if (/mise [àa] jour|update/.test(t)) return 'mise_a_jour';
  if (/lent|rame|bloqu|fig|plant/.test(t)) return 'lenteur';
  return 'generique_sav';
};
