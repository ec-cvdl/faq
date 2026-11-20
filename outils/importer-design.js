#!/usr/bin/env node
/* Recopie le design de La Distrib (dépôt front) dans design/ : feuilles de style, illustrations
   et logo, pour que le dépannage ait exactement le même rendu que dans La Distrib.
   Usage : node outils/importer-design.js ../La-Distrib-CVL-Front */
const fs = require('fs');
const path = require('path');
const front = process.argv[2];
if (!front || !fs.existsSync(path.join(front, 'depannage.css'))) {
  console.error('Usage : node outils/importer-design.js <dossier du front La Distrib>');
  process.exit(1);
}
const dest = path.join(__dirname, '..', 'design');
fs.mkdirSync(dest, { recursive: true });
const lire = (f) => fs.readFileSync(path.join(front, f), 'utf8');
for (const f of ['cvdl-ui.css', 'depannage.css', 'illustrations.js', 'logo.png']) {
  fs.copyFileSync(path.join(front, f), path.join(dest, f));
}
/* portail-ui.js contient beaucoup d'autres composants : on n'en garde que le moteur
   d'illustrations (bloc autonome) et la clé d'illustration des symptômes. */
const portail = lire('portail-ui.js');
const extraire = (debut, fin) => {
  const i = portail.indexOf(debut);
  const j = portail.indexOf(fin, i);
  if (i < 0 || j < 0) throw new Error('Bloc introuvable dans portail-ui.js : ' + debut);
  return portail.slice(i, j + fin.length);
};
const moteur = extraire('/* portail-ui.js — illustrations communes', '\n})();\n');
const cle = extraire("/* Clé d'illustration d'un symptôme SAV", '\n};\n');
fs.writeFileSync(
  path.join(dest, 'illustrations-moteur.js'),
  '/* Extrait de portail-ui.js (La Distrib) par outils/importer-design.js : ne pas modifier ici. */\n' +
    moteur +
    '\n' +
    cle,
);
console.log('Design importé dans design/ : cvdl-ui.css, depannage.css, illustrations.js, illustrations-moteur.js, logo.png');
