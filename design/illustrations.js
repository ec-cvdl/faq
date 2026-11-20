/* Illustrations La Distrib (trait fin bleu nuit + aplat de couleur décalé), une seule liste pour tout
   le site : portail, admin (data-ill, dessinées par portail-ui.js) et « Comprendre La Distrib »
   (projet-comprendre.js). Entrée : [couleur de l'aplat (m magenta, t turquoise, j jaune),
   formes de l'aplat, traits], en SVG 48 × 48. Chargé avant portail-ui.js et projet-comprendre.js. */
window.ILLUSTRATIONS_CVDL = {
  flotte: [
    't',
    '<rect x="8" y="12" width="26" height="18" rx="3"/><rect x="30" y="18" width="12" height="20" rx="3"/>',
    '<rect x="6" y="10" width="26" height="18" rx="3"/><path d="M3 32h32"/><rect x="31" y="16" width="12" height="22" rx="2.5" fill="var(--ill-fond)"/><path d="M35.5 34h3"/>',
  ],
  gestionFlotte: [
    'v',
    '<rect x="9" y="10" width="32" height="30" rx="4"/>',
    '<rect x="7" y="8" width="32" height="30" rx="4"/><path d="M7 17h32M7 27.5h32M18 17v21"/>',
  ],
  partenairesCmd: [
    'm',
    '<path d="M10 18 24 11l14 7v14l-14 7-14-7z"/>',
    '<path d="M8 16 22 9l14 7v14l-14 7-14-7z"/><path d="M8 16l14 7 14-7M22 23v14M15 12.5 29 19.5"/><circle cx="37" cy="36" r="7" fill="var(--ill-fond)"/><path d="M34 36h6M37.5 33.5 40 36l-2.5 2.5"/>',
  ],
  structures: [
    't',
    '<rect x="9" y="16" width="14" height="24" rx="2"/><rect x="27" y="10" width="14" height="30" rx="2"/>',
    '<rect x="7" y="14" width="14" height="24" rx="2"/><rect x="25" y="8" width="14" height="30" rx="2"/><path d="M11 20h2M16 20h2M11 26h2M16 26h2M29 14h2M34 14h2M29 20h2M34 20h2M29 26h2M34 26h2M12 38v-5h4v5M30 38v-5h4v5M3 38h40"/>',
  ],
  tarifs: [
    'm',
    '<path d="M26 8h14v14L22 40 8 26z"/>',
    '<path d="M24 6h14v14L20 38 6 24z"/><circle cx="31.5" cy="12.5" r="2.5"/><path d="M24.5 22.5a5 5 0 1 0 0 6.5M16 24.2h7M16.5 27.2h6"/>',
  ],
  aide: [
    't',
    '<path d="M12 12h22l5 5-5 5H12z"/>',
    '<path d="M22 4v38"/><path d="M10 10h22l5 5-5 5H10z"/><path d="M34 24H14l-5 5 5 5h20z" fill="var(--ill-fond)"/><path d="M16 42h12"/>',
  ],
  attestations: [
    'm',
    '<rect x="12" y="8" width="24" height="32" rx="3"/>',
    '<path d="M30 40H11a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h17l8 8v9"/><path d="M28 6v8h8M14 18h10M14 23h14M14 28h8"/><circle cx="34" cy="31" r="6" fill="var(--ill-fond)"/><path d="m30.5 36-1.5 6 5-2.5 5 2.5-1.5-6"/>',
  ],
  categories: [
    't',
    '<rect x="7" y="9" width="16" height="22" rx="3"/><rect x="27" y="17" width="14" height="22" rx="3"/>',
    '<rect x="5" y="7" width="16" height="22" rx="3"/><path d="M11 25h4"/><rect x="25" y="15" width="14" height="22" rx="3"/><path d="M30 33h4M5 38h13M25 42h14M8 34h7"/>',
  ],
  penseBete: [
    't',
    '<rect x="10" y="11" width="24" height="30" rx="3"/>',
    '<rect x="7" y="8" width="25" height="33" rx="3"/><path d="M12 5v6M18 5v6M24 5v6M12 18h13M12 24h10M12 30h6"/><path d="M12 36c2-2.5 3.5 1.5 5.5-.5s3-2 4.5 0"/><path d="m27 35 12.5-12.5 4 4L31 39l-5.5 1.5z" fill="var(--ill-fond)"/><path d="m37 25 4 4"/>',
  ],
  commander: [
    'm',
    '<rect x="13" y="15" width="26" height="15" rx="3"/>',
    '<path d="M4 7h6l4 21h22l4-15H12"/><circle cx="17" cy="37" r="3" fill="var(--ill-fond)"/><circle cx="33" cy="37" r="3" fill="var(--ill-fond)"/><path d="M20 20h10M25 15v10"/>',
  ],
  commandes: [
    'm',
    '<path d="M10 17 24 10l14 7v16l-14 7-14-7z"/>',
    '<path d="M8 15 22 8l14 7v16l-14 7-14-7z"/><path d="M8 15l14 7 14-7M22 22v16"/><rect x="28" y="26" width="16" height="16" rx="4" fill="var(--ill-fond)"/><path d="m32 34 2.5 2.5L40 31"/>',
  ],
  panne: [
    't',
    '<rect x="7" y="13" width="24" height="16" rx="3"/><path transform="translate(19 11) scale(1.25)" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z"/>',
    '<rect x="5" y="11" width="24" height="16" rx="3"/><path d="M2 31h22"/><path vector-effect="non-scaling-stroke" transform="translate(17 9) scale(1.25)" fill="var(--ill-fond)" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  ],
  stockAncien: [
    'v',
    '<path d="M10 17 24 10l14 7v16l-14 7-14-7z"/>',
    '<path d="M8 15 22 8l14 7v16l-14 7-14-7z"/><path d="M8 15l14 7 14-7M22 22v16M15 11.5l14 7v5"/><circle cx="35" cy="34" r="9" fill="var(--ill-fond)"/><path d="M35 29v5.5l3.5 2"/>',
  ],
  suiviSav: [
    't',
    '<rect x="12" y="10" width="26" height="30" rx="3"/>',
    '<rect x="10" y="8" width="26" height="32" rx="3"/><rect x="17" y="5" width="12" height="6" rx="2" fill="var(--ill-fond)"/><path d="M14 26h5l3-6 4 10 3-6h4"/>',
  ],
  passeport: [
    'm',
    '<rect x="12" y="8" width="26" height="33" rx="3"/>',
    '<rect x="10" y="6" width="26" height="33" rx="3"/><circle cx="23" cy="18" r="5"/><path d="M18 18h10M23 13c-2 3-2 7 0 10M23 13c2 3 2 7 0 10M16 30h14M18 34h10"/>',
  ],
  enquete: [
    'm',
    '<path d="M10 12h30a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H22l-8 7v-7h-4a3 3 0 0 1-3-3V15a3 3 0 0 1 3-3z"/>',
    '<path d="M8 10h30a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H20l-8 7v-7H8a3 3 0 0 1-3-3V13a3 3 0 0 1 3-3z"/><path d="m23 14.5 2.2 4.4 4.8.6-3.5 3.3.9 4.8L23 25.2l-4.4 2.4.9-4.8-3.5-3.3 4.8-.6z"/>',
  ],
  cle: [
    't',
    '<circle cx="17" cy="27" r="9"/>',
    '<circle cx="15" cy="25" r="8"/><circle cx="15" cy="25" r="2.5"/><path d="M21 19 38 8M32 12l4 5M27.5 15l3 4"/>',
  ],
  structure: [
    'm',
    '<rect x="11" y="12" width="26" height="28" rx="2"/>',
    '<rect x="9" y="10" width="26" height="28" rx="2"/><path d="M15 16h3M21 16h3M27 16h2M15 22h3M21 22h3M27 22h2M15 28h3M27 28h2M19 38v-7h6v7M4 38h36"/>',
  ],
  personne: [
    't',
    '<circle cx="25" cy="17" r="8"/><path d="M11 41a14 14 0 0 1 28 0z"/>',
    '<circle cx="23" cy="15" r="7"/><path d="M9 39a14 14 0 0 1 28 0"/><path d="M33 9l3-3M36 13h4"/>',
  ],
  vide: [
    'm',
    '<circle cx="21" cy="21" r="12"/>',
    '<circle cx="19" cy="19" r="12"/><path d="m28 28 12 12"/><path d="M14 19h10"/>',
  ],
  tableur: [
    't',
    '<rect x="10" y="10" width="30" height="28" rx="3"/>',
    '<rect x="8" y="8" width="30" height="28" rx="3"/><path d="M8 15h30M8 22h30M8 29h30M17 8v28M27.5 8v28"/><rect x="17" y="15" width="10.5" height="7" fill="var(--ill-fond)"/>',
  ],
  tableau: [
    't',
    '<rect x="10" y="10" width="30" height="28" rx="3"/>',
    '<rect x="8" y="8" width="30" height="28" rx="3"/><path d="M8 15h30"/><rect x="12" y="20" width="7" height="12" rx="1.5" fill="var(--ill-fond)"/><rect x="22" y="25" width="5" height="7" rx="1.5"/><rect x="30" y="22" width="4" height="10" rx="1.5"/>',
  ],
  facture: [
    'm',
    '<path d="M12 8h24v32l-4-3-4 3-4-3-4 3-4-3-4 3z"/>',
    '<path d="M10 6h24v32l-4-3-4 3-4-3-4 3-4-3-4 3z"/><path d="M15 13h14M15 19h14M15 25h8"/><circle cx="33" cy="31" r="7" fill="var(--ill-fond)"/><path d="M35.5 28.5a3.2 3.2 0 1 0 0 5M30 30.2h4M30 32.2h3.4"/>',
  ],
  stock: [
    't',
    '<rect x="9" y="24" width="15" height="15" rx="2"/><rect x="26" y="24" width="15" height="15" rx="2"/>',
    '<rect x="7" y="22" width="15" height="15" rx="2"/><rect x="24" y="22" width="15" height="15" rx="2"/><rect x="15.5" y="5" width="15" height="14" rx="2" fill="var(--ill-fond)"/><path d="M14.5 22v5M31.5 22v5M23 5v5M3 40h40"/>',
  ],
  stats: [
    'm',
    '<path d="M10 40V30h6v10zM21 40V24h6v16zM32 40V18h6v22z"/>',
    '<path d="M5 40h38"/><rect x="9" y="30" width="6" height="10" rx="1"/><rect x="20" y="24" width="6" height="16" rx="1" fill="var(--ill-fond)"/><rect x="31" y="18" width="6" height="22" rx="1"/><path d="M7 21l10-8 8 4 12-11"/><path d="M31 6h6v6"/>',
  ],
  reglages: [
    't',
    '<circle cx="25" cy="25" r="13"/>',
    '<circle cx="23" cy="23" r="12"/><circle cx="23" cy="23" r="5" fill="var(--ill-fond)"/><path d="M23 5v5M23 36v5M5 23h5M36 23h5M10.3 10.3l3.5 3.5M32.2 32.2l3.5 3.5M10.3 35.7l3.5-3.5M32.2 13.8l3.5-3.5"/>',
  ],
  impact: [
    't',
    '<circle cx="25" cy="25" r="16"/>',
    '<circle cx="23" cy="23" r="16"/><path d="M8 20h8l3 4-2 5 4 4v8M30 8l-2 6 4 3h8"/><path d="M28 40c0-9 5-15 14-16-1 9-6 14-14 16z" fill="var(--ill-fond)"/><path d="M28 40l8-9"/>',
  ],
  distribution: [
    't',
    '<path d="M9 20 21 14l12 6v14l-12 6-12-6z"/>',
    '<path d="M7 18 19 12l12 6v14l-12 6-12-6z"/><path d="M7 18l12 6 12-6M19 24v14"/><path d="M34 12h8M38 8l4 4-4 4M34 26h8M38 22l4 4-4 4"/>',
  ],
  calendrier: [
    'm',
    '<rect x="9" y="12" width="32" height="28" rx="3"/>',
    '<rect x="7" y="10" width="32" height="28" rx="3"/><path d="M7 18h32M15 6v8M31 6v8"/><rect x="13" y="23" width="6" height="5" rx="1" fill="var(--ill-fond)"/><path d="M24 25.5h9M13 32.5h6M24 32.5h9"/>',
  ],
  cloche: [
    'm',
    '<path d="M14 18a11 11 0 0 1 22 0c0 12 5 15 5 15H9s5-3 5-15z"/>',
    '<path d="M12 16a11 11 0 0 1 22 0c0 12 5 15 5 15H7s5-3 5-15z"/><path d="M19 36a4 4 0 0 0 8 0"/><circle cx="36" cy="9" r="5" fill="var(--ill-fond)"/>',
  ],
  linux: [
    't',
    '<ellipse cx="25" cy="27" rx="12" ry="14"/>',
    '<path d="M23 6c-5 0-7 4-7 9 0 3-4 7-5 12-1 4 1 8 4 10h16c3-2 5-6 4-10-1-5-5-9-5-12 0-5-2-9-7-9z"/><circle cx="20" cy="15" r="1.5"/><circle cx="26" cy="15" r="1.5"/><path d="M20 20c2 1.5 4 1.5 6 0M14 40l-3 3h8M32 40l3 3h-8"/>',
  ],
  ordinateur: [
    't',
    '<rect x="10" y="12" width="28" height="18" rx="2"/>',
    '<rect x="8" y="10" width="28" height="18" rx="2"/><path d="M3 32h38M20 32v2h6v-2"/>',
  ],
  smartphone: [
    'm',
    '<rect x="16" y="8" width="18" height="32" rx="3"/>',
    '<rect x="14" y="6" width="18" height="32" rx="3"/><path d="M21 33h4"/>',
  ],
  euro: [
    'm',
    '<circle cx="26" cy="26" r="15"/>',
    '<circle cx="24" cy="24" r="15"/><path d="M29 17.5a8 8 0 1 0 0 13M17 21.5h9M17 26.5h8"/>',
  ],
  cible: [
    't',
    '<circle cx="26" cy="26" r="15"/>',
    '<circle cx="24" cy="24" r="15"/><circle cx="24" cy="24" r="8.5"/><circle cx="24" cy="24" r="2.5" fill="var(--ill-fond)"/><path d="M24 24 37 11M33 9.5h5.5V15"/>',
  ],
  ampoule: [
    'm',
    '<circle cx="26" cy="20" r="11"/>',
    '<path d="M18 26a10 10 0 1 1 12 0c-1.5 1.2-2 2.5-2 4v2h-8v-2c0-1.5-.5-2.8-2-4z"/><path d="M20 36h8M21 40h6M24 9v-3M11 18H8M40 18h-3M14 9l-2-2M34 9l2-2"/>',
  ],
  coeur: [
    'm',
    '<path transform="translate(2 2)" d="M24 38S9 29 9 19a7.5 7.5 0 0 1 15-2 7.5 7.5 0 0 1 15 2c0 10-15 19-15 19z"/>',
    '<path d="M24 38S9 29 9 19a7.5 7.5 0 0 1 15-2 7.5 7.5 0 0 1 15 2c0 10-15 19-15 19z"/>',
  ],
  lieu: [
    't',
    '<path transform="translate(2 2)" d="M24 42s-12-12-12-21a12 12 0 0 1 24 0c0 9-12 21-12 21z"/>',
    '<path d="M24 42s-12-12-12-21a12 12 0 0 1 24 0c0 9-12 21-12 21z"/><circle cx="24" cy="21" r="4.5" fill="var(--ill-fond)"/>',
  ],
  horloge: ['t', '<circle cx="26" cy="26" r="15"/>', '<circle cx="24" cy="24" r="15"/><path d="M24 14.5V24l6.5 4"/>'],
  bouclier: [
    'm',
    '<path transform="translate(2 2)" d="M24 6l14 5v10c0 9-6 15-14 18-8-3-14-9-14-18V11z"/>',
    '<path d="M24 6l14 5v10c0 9-6 15-14 18-8-3-14-9-14-18V11z"/><path d="m18 23 4.5 4.5L31 19"/>',
  ],
  fusee: [
    't',
    '<path transform="translate(2 2)" d="M24 6c7 3 10 11 9 19l-5 5h-8l-5-5c-1-8 2-16 9-19z"/>',
    '<path d="M24 6c7 3 10 11 9 19l-5 5h-8l-5-5c-1-8 2-16 9-19z"/><circle cx="24" cy="18" r="3.5" fill="var(--ill-fond)"/><path d="M15 25l-5 6 7 1M33 25l5 6-7 1M21 35l3 6 3-6"/>',
  ],
  document: [
    't',
    '<rect x="13" y="9" width="26" height="33" rx="3"/>',
    '<path d="M11 7h17l9 9v23a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3z"/><path d="M28 7v9h9M17 24h14M17 30h14M17 36h8"/>',
  ],
  mail: [
    'm',
    '<rect x="9" y="13" width="34" height="24" rx="3"/>',
    '<rect x="7" y="11" width="34" height="24" rx="3"/><path d="m7 14 17 12 17-12"/>',
  ],
  groupe: [
    't',
    '<circle cx="19" cy="19" r="6"/><circle cx="34" cy="21" r="5"/><path d="M7 40a12 12 0 0 1 24 0zM29 32a10 10 0 0 1 16 8z"/>',
    '<circle cx="17" cy="17" r="6"/><circle cx="32" cy="19" r="5"/><path d="M5 38a12 12 0 0 1 24 0M27 30a10 10 0 0 1 16 8"/>',
  ],
  formation: [
    'm',
    '<path d="M26 14l20 8-20 8-20-8z"/>',
    '<path d="M24 12l20 8-20 8-20-8z"/><path d="M12 24v9c0 3 6 6 12 6s12-3 12-6v-9M44 20v10"/>',
  ],
  croissance: [
    't',
    '<path d="M10 40V30l9-7 8 5 13-12v24z"/>',
    '<path d="M6 6v32h36"/><path d="M8 28l9-7 8 5 13-12"/><path d="M32 14h6v6"/>',
  ],
  etoile: [
    'j',
    '<path transform="translate(2 2)" d="M24 6l5.5 11.5 12.5 1.8-9 8.8 2.1 12.4L24 34.6l-11.1 5.9 2.1-12.4-9-8.8 12.5-1.8z"/>',
    '<path d="M24 6l5.5 11.5 12.5 1.8-9 8.8 2.1 12.4L24 34.6l-11.1 5.9 2.1-12.4-9-8.8 12.5-1.8z"/>',
  ],
  recyclage: [
    't',
    '<circle cx="26" cy="26" r="14"/>',
    '<path d="M11 20a14 14 0 0 1 25-6M37 28a14 14 0 0 1-25 6"/><path d="M36 7v7h-7M12 41v-7h7"/>',
  ],
  feuille: [
    't',
    '<path transform="translate(2 2)" d="M10 38C10 20 20 9 39 9c0 19-11 29-29 29z"/>',
    '<path d="M10 38C10 20 20 9 39 9c0 19-11 29-29 29z"/><path d="M10 38 28 20"/>',
  ],
  recette: [
    'm',
    '<rect x="12" y="10" width="26" height="32" rx="3"/>',
    '<rect x="10" y="8" width="26" height="32" rx="3"/><rect x="17" y="5" width="12" height="6" rx="2" fill="var(--ill-fond)"/><path d="m15 19 2.5 2.5L22 17M15 29l2.5 2.5L22 27M25 20h6M25 30h6"/>',
  ],
  demo: [
    't',
    '<rect x="8" y="10" width="34" height="22" rx="3"/>',
    '<rect x="6" y="8" width="34" height="22" rx="3"/><path d="M16 38h14M23 30v8"/><path d="M20 14.5v9l7.5-4.5z" fill="var(--ill-fond)"/>',
  ],
  drapeau: ['j', '<path d="M16 9h22l-5 7 5 7H16z"/>', '<path d="M12 42V6"/><path d="M12 7h22l-5 7 5 7H12"/>'],
  outils: [
    'm',
    '<circle cx="18" cy="18" r="10"/>',
    '<path d="M27.5 9.5a7 7 0 0 0-9.4 8.6L7.6 28.6a3 3 0 0 0 4.2 4.2l10.5-10.5a7 7 0 0 0 8.6-9.4l-4.4 4.4-3.6-.6-.6-3.6z"/><path d="m28 31 7 7"/><path d="m33 36 4.5 4.5 3-3L36 33z" fill="var(--ill-fond)"/>',
  ],
  bulle: [
    't',
    '<path d="M10 10h28a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H22l-8 7v-7h-4a3 3 0 0 1-3-3V13a3 3 0 0 1 3-3z"/>',
    '<path d="M8 8h28a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H20l-8 7v-7H8a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3z"/><path d="M13 16h18M13 22h12"/>',
  ],
  camion: [
    't',
    '<rect x="6" y="14" width="24" height="18" rx="2"/>',
    '<path d="M4 12h24v18H4z"/><path d="M28 18h8l6 7v5H28"/><circle cx="12" cy="33" r="4" fill="var(--ill-fond)"/><circle cx="34" cy="33" r="4" fill="var(--ill-fond)"/>',
  ],
  carte: [
    'j',
    '<path d="M8 12l10-4 12 4 10-4v28l-10 4-12-4-10 4z"/>',
    '<path d="M6 10l10-4 12 4 10-4v28l-10 4-12-4-10 4z"/><path d="M16 6v28M28 10v28"/>',
  ],
  loupe: [
    'm',
    '<circle cx="22" cy="22" r="12"/>',
    '<circle cx="20" cy="20" r="12"/><path d="m29 29 11 11"/><path d="M14 19a6 6 0 0 1 6-6"/>',
  ],
  telephone: [
    't',
    '<path d="M14 10l7 1 3 8-4 3a20 20 0 0 0 10 10l3-4 8 3 1 7a4 4 0 0 1-4 4C23 41 11 29 10 14a4 4 0 0 1 4-4z"/>',
    '<path d="M12 8l7 1 3 8-4 3a20 20 0 0 0 10 10l3-4 8 3 1 7a4 4 0 0 1-4 4C21 39 9 27 8 12a4 4 0 0 1 4-4z"/>',
  ],
  cadenas: [
    'm',
    '<rect x="11" y="22" width="28" height="20" rx="3"/>',
    '<rect x="9" y="20" width="28" height="20" rx="3"/><path d="M15 20v-6a8 8 0 0 1 16 0v6"/><circle cx="23" cy="29" r="2.5"/><path d="M23 31.5V35"/>',
  ],
  base: [
    't',
    '<ellipse cx="26" cy="13" rx="13" ry="5"/><path d="M13 13v24c0 2.8 5.8 5 13 5s13-2.2 13-5V13"/>',
    '<ellipse cx="24" cy="11" rx="13" ry="5" fill="var(--ill-fond)"/><path d="M11 11v24c0 2.8 5.8 5 13 5s13-2.2 13-5V11M11 23c0 2.8 5.8 5 13 5s13-2.2 13-5"/>',
  ],
  serveur: [
    'm',
    '<rect x="10" y="9" width="30" height="13" rx="3"/><rect x="10" y="26" width="30" height="13" rx="3"/>',
    '<rect x="8" y="7" width="30" height="13" rx="3"/><rect x="8" y="24" width="30" height="13" rx="3"/><path d="M14 13.5h2M14 30.5h2M24 13.5h8M24 30.5h8"/>',
  ],
  nuage: [
    't',
    '<path d="M15 36a8 8 0 0 1-1-16 11 11 0 0 1 21-3 8 9.5 0 0 1 3 19z"/>',
    '<path d="M13 34a8 8 0 0 1-1-16 11 11 0 0 1 21-3 8 9.5 0 0 1 3 19z"/>',
  ],
  code: [
    'm',
    '<rect x="8" y="10" width="34" height="28" rx="3"/>',
    '<rect x="6" y="8" width="34" height="28" rx="3"/><path d="M6 15h34"/><path d="m17 22-4 4 4 4M29 22l4 4-4 4M25 20l-4 12"/>',
  ],
  puzzle: [
    'j',
    '<rect x="10" y="12" width="28" height="28" rx="3"/>',
    '<path d="M8 10h10a4 4 0 1 1 8 0h10v10a4 4 0 1 0 0 8v10H26a4 4 0 1 0-8 0H8V28a4 4 0 1 1 0-8z"/>',
  ],
  balance: [
    't',
    '<path d="M5 27h14a7 7 0 0 1-14 0zM29 27h14a7 7 0 0 1-14 0z"/>',
    '<path d="M24 6v34M14 40h20M9 12h30"/><path d="M9 12 3 25h12zM39 12l-6 13h12z"/><path d="M3 25a6 6 0 0 0 12 0M33 25a6 6 0 0 0 12 0"/>',
  ],
  question: [
    'm',
    '<circle cx="26" cy="26" r="16"/>',
    '<circle cx="24" cy="24" r="16"/><path d="M19 19a5 5 0 1 1 7 4.6c-1.3.6-2 1.6-2 3V28"/><path d="M24 33v.5"/>',
  ],
  alerte: ['j', '<path d="M26 8 44 40H8z"/>', '<path d="M24 6 42 38H6z"/><path d="M24 17v10M24 32v.5"/>'],
  livre: [
    't',
    '<path d="M8 12h14a4 4 0 0 1 4 4v24a3 3 0 0 0-3-3H8zM44 12H30a4 4 0 0 0-4 4v24a3 3 0 0 1 3-3h15z"/>',
    '<path d="M6 10h14a4 4 0 0 1 4 4v24a3 3 0 0 0-3-3H6zM42 10H28a4 4 0 0 0-4 4v24a3 3 0 0 1 3-3h15z"/>',
  ],
  trophee: [
    'j',
    '<path d="M16 8h20v10a10 10 0 0 1-20 0z"/>',
    '<path d="M14 6h20v10a10 10 0 0 1-20 0z"/><path d="M14 9H8a6 6 0 0 0 6 8M34 9h6a6 6 0 0 1-6 8M24 26v8"/><path d="M18 34h12v6H18z" fill="var(--ill-fond)"/>',
  ],
  especes: [
    'j',
    '<rect x="8" y="14" width="34" height="20" rx="3"/>',
    '<rect x="6" y="12" width="34" height="20" rx="3"/><circle cx="23" cy="22" r="4.5"/><path d="M11 17h.01M35 27h.01"/><circle cx="38" cy="36" r="6.5" fill="var(--ill-fond)"/><path d="M38 33v6"/>',
  ],
  carteBancaire: [
    't',
    '<rect x="8" y="13" width="34" height="23" rx="3.5"/>',
    '<rect x="6" y="11" width="34" height="23" rx="3.5"/><path d="M6 17.5h34"/><rect x="11" y="23" width="7" height="5" rx="1"/><path d="M25 28.5h10"/>',
  ],
  cheque: [
    'm',
    '<rect x="8" y="16" width="34" height="18" rx="2"/>',
    '<rect x="6" y="14" width="34" height="18" rx="2"/><path d="M11 20h12M11 25h7"/><path d="M24 27.5c2-3.5 3 1 5-1.5s2.5 1 5-1.5"/>',
  ],
  calculatrice: [
    'm',
    '<rect x="12" y="8" width="26" height="34" rx="3"/>',
    '<rect x="10" y="6" width="26" height="34" rx="3"/><rect x="15" y="11" width="16" height="7" rx="1.5" fill="var(--ill-fond)"/><path d="M16 24h2M23 24h2M30 24h1M16 30h2M23 30h2M16 35h2M23 35h2M30 29v7"/>',
  ],
  support: [
    't',
    '<rect x="8" y="22" width="9" height="13" rx="3"/><rect x="33" y="22" width="9" height="13" rx="3"/>',
    '<path d="M8 26v-4a16 16 0 0 1 32 0v4"/><rect x="6" y="22" width="9" height="13" rx="3" fill="var(--ill-fond)"/><rect x="33" y="22" width="9" height="13" rx="3" fill="var(--ill-fond)"/><path d="M38 35c0 4-4 6-10 6"/><circle cx="26" cy="41" r="2"/>',
  ],
  colis: [
    'j',
    '<path d="M10 17 26 9l16 8v18l-16 8-16-8z"/>',
    '<path d="M8 15 24 7l16 8v18l-16 8-16-8z"/><path d="m8 15 16 8 16-8M24 23v18M16 11l16 8v6"/>',
  ],
  globe: [
    't',
    '<circle cx="26" cy="26" r="16"/>',
    '<circle cx="24" cy="24" r="16"/><path d="M8 24h32M24 8c5 4.5 7 10 7 16s-2 11.5-7 16c-5-4.5-7-10-7-16s2-11.5 7-16z"/>',
  ],
  photo: [
    'm',
    '<rect x="8" y="14" width="34" height="24" rx="3"/>',
    '<rect x="6" y="12" width="34" height="24" rx="3"/><path d="M16 12l3-5h10l3 5"/><circle cx="23" cy="24" r="6.5" fill="var(--ill-fond)"/>',
  ],
  video: [
    't',
    '<rect x="7" y="14" width="26" height="22" rx="3"/>',
    '<rect x="5" y="12" width="26" height="22" rx="3"/><path d="m31 20 11-6v18l-11-6z"/>',
  ],
  lien: [
    'm',
    '<circle cx="26" cy="25" r="13"/>',
    '<path d="M20 28a6 6 0 0 0 8.5 0l7-7a6 6 0 0 0-8.5-8.5l-2.5 2.5"/><path d="M28 20a6 6 0 0 0-8.5 0l-7 7a6 6 0 0 0 8.5 8.5l2.5-2.5"/>',
  ],
  accueil: [
    'm',
    '<path d="M10 22 26 10l16 12v18H10z"/>',
    '<path d="M5 22 24 7l19 15"/><path d="M9 19v21h30V19"/><rect x="19" y="28" width="10" height="12" rx="1" fill="var(--ill-fond)"/>',
  ],
  modifier: [
    'j',
    '<path d="M32 8l8 8-20 20-10 2 2-10z"/>',
    '<path d="M30 6l8 8-20 20-10 2 2-10z"/><path d="M25 11l8 8M12 28l6 6"/>',
  ],
  annuler: [
    'm',
    '<circle cx="26" cy="26" r="15"/>',
    '<circle cx="24" cy="24" r="15"/><path d="m18 18 12 12M30 18 18 30"/>',
  ],
  valider: [
    't',
    '<circle cx="26" cy="26" r="15"/>',
    '<circle cx="24" cy="24" r="15"/><path d="m16.5 24.5 5 5 10-11"/>',
  ],
  ajouter: [
    'm',
    '<rect x="10" y="10" width="30" height="30" rx="7"/>',
    '<rect x="8" y="8" width="30" height="30" rx="7"/><path d="M23 16v14M16 23h14"/>',
  ],
  options: [
    'v',
    '<rect x="8" y="16" width="34" height="18" rx="9"/>',
    '<rect x="6" y="14" width="34" height="18" rx="9"/><circle cx="14.5" cy="23" r="1.6"/><circle cx="23" cy="23" r="1.6"/><circle cx="31.5" cy="23" r="1.6"/>',
  ],
  historique: [
    't',
    '<circle cx="26" cy="26" r="15"/>',
    '<path d="M9 24a15 15 0 1 0 4.4-10.6"/><path d="M8 7v7h7"/><path d="M24 15v9l6 4"/>',
  ],
  imprimer: [
    'v',
    '<rect x="10" y="20" width="34" height="14" rx="3"/>',
    '<path d="M14 18V6h20v12"/><rect x="6" y="18" width="36" height="16" rx="3"/><rect x="14" y="27" width="20" height="15" rx="1.5" fill="var(--ill-fond)"/><path d="M18 32h12M18 37h8M35 23h2"/>',
  ],
  telecharger: [
    'j',
    '<rect x="8" y="30" width="36" height="12" rx="3"/>',
    '<path d="M24 6v23M15 20l9 9 9-9"/><path d="M6 31v6a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-6"/>',
  ],
  envoyer: ['t', '<path d="M8 23 44 8 35 42z"/>', '<path d="M5 21 42 6 33 40l-9-11z"/><path d="m42 6-18 23v11l5-6"/>'],
  echange: ['t', '<circle cx="26" cy="26" r="15"/>', '<path d="M9 17h28l-7-7M39 31H11l7 7"/>'],
  retour: [
    'j',
    '<path d="M10 20h20a10 10 0 0 1 0 20H18z"/>',
    '<path d="M17 9 7 19l10 10"/><path d="M7 19h21a11 11 0 0 1 0 22h-8"/>',
  ],
  archive: [
    'j',
    '<rect x="10" y="18" width="32" height="22" rx="3"/>',
    '<rect x="5" y="8" width="38" height="9" rx="2"/><path d="M8 17v20a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V17"/><path d="M19 25h10"/>',
  ],
  filtre: ['j', '<path d="M10 10h32L30 26v14l-8-4V26z"/>', '<path d="M6 8h34L28 24v14l-8-4V24z"/>'],
  urgent: ['j', '<path d="M28 6 12 28h12l-4 16 18-24H26z"/>', '<path d="M26 4 10 26h12l-4 16 18-24H24z"/>'],
  etiquette: [
    'j',
    '<path d="M8 14h24l12 12-12 12H8z"/>',
    '<path d="M6 12h24l12 12-12 12H6z"/><circle cx="29" cy="24" r="3"/><path d="M11 20h10M11 28h8"/>',
  ],
  codeBarre: [
    'v',
    '<rect x="8" y="12" width="34" height="26" rx="3"/>',
    '<rect x="6" y="10" width="34" height="26" rx="3"/><path d="M12 16v14M16 16v14M20 16v14M25 16v14M29 16v14M34 16v14"/>',
  ],
  diagnostic: [
    'm',
    '<circle cx="37" cy="34" r="7"/>',
    '<path d="M11 6H8v12a9 9 0 0 0 18 0V6h-3"/><path d="M17 27v4a9 9 0 0 0 18 0v-4"/><circle cx="35" cy="24" r="4" fill="var(--ill-fond)"/>',
  ],
  conversation: [
    't',
    '<path d="M20 18h24v18h-6v6l-7-6H20z"/>',
    '<path d="M18 26v6h12l7 6v-6h5V14h-8"/><path d="M5 6h28v18H16l-7 6v-6H5z" fill="var(--ill-fond)"/><path d="M11 13h16M11 18h10"/>',
  ],
  personnesListe: [
    'm',
    '<rect x="9" y="9" width="32" height="32" rx="4"/>',
    '<rect x="7" y="7" width="32" height="32" rx="4"/><circle cx="16" cy="17" r="3"/><path d="M11 26a5 5 0 0 1 10 0M25 15h9M25 21h7M12 32h22"/>',
  ],
  region: [
    't',
    '<path d="M10 14l10-4 10 4 12-4v26l-12 4-10-4-10 4z"/>',
    '<path d="M6 12l12-5 12 5 12-5v28l-12 5-12-5-12 5z"/><path d="M18 7v28M30 12v28"/><circle cx="24" cy="21" r="3.5" fill="var(--ill-fond)"/>',
  ],
  chariot: [
    'j',
    '<path d="M14 12h30l-4 18H18z"/>',
    '<path d="M4 7h6l5 24h24l4-18H12"/><circle cx="18" cy="38" r="3"/><circle cx="36" cy="38" r="3"/><path d="M19 19h18"/>',
  ],
};
