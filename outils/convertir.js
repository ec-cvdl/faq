#!/usr/bin/env node
/* Convertit un export « cvdl-depannage » (admin La Distrib, onglet Dépannage, ou route publique
   /depannage-arbres) en arbres.json pour ce site : ne garde que les arbres publiés et remplace
   le vocabulaire de déclaration en ligne par « contacter le SAV ».
   Usage : node outils/convertir.js export.json [arbres.json] */
const fs = require('fs');
const [src, dest = 'arbres.json'] = process.argv.slice(2);
if (!src) {
  console.error('Usage : node outils/convertir.js export.json [arbres.json]');
  process.exit(1);
}
const entree = JSON.parse(fs.readFileSync(src, 'utf8'));
const REMPLACEMENTS = [
  [/Dans la déclaration, indiquez/g, 'Quand vous contacterez le SAV, indiquez'],
  [/dans la déclaration/g, 'au SAV'],
  [/déclarer un SAV/g, 'contacter le SAV'],
  [/déclarez un SAV/g, 'contactez le SAV'],
  [/Déclarer un SAV/g, 'Contacter le SAV'],
  [/Déclarez le SAV/g, 'Contactez le SAV'],
];
const adapter = (s) => REMPLACEMENTS.reduce((t, [re, par]) => t.replace(re, par), String(s || ''));
const arbres = (entree.arbres || [])
  .filter((a) => !a.statut || a.statut === 'publie')
  .map((a) => {
    const etapes = {};
    for (const [id, e] of Object.entries(a.etapes || {})) {
      etapes[id] = {
        ...e,
        titre: adapter(e.titre),
        texte: adapter(e.texte),
        astuce: adapter(e.astuce),
        reponses: (e.reponses || []).map((r) => ({ libelle: adapter(r.libelle), cible: r.cible })),
      };
    }
    return { ...a, description: adapter(a.description), etapes };
  });
const sortie = { format: 'cvdl-depannage', version: entree.version || 1, cree_le: entree.cree_le || '', arbres };
fs.writeFileSync(dest, JSON.stringify(sortie, null, 2) + '\n');
const reste = JSON.stringify(arbres).match(/déclar[a-zé]*/gi) || [];
console.log(`${arbres.length} arbres écrits dans ${dest}` + (reste.length ? ` ; à relire : ${[...new Set(reste)].join(', ')}` : ''));
