#!/usr/bin/env node
/* Convertit un export « cvdl-depannage » (admin La Distrib, onglet Dépannage, ou route publique
   /depannage-arbres) en arbres.json pour ce site : ne garde que les arbres publiés et remplace
   les renvois vers le SAV de La Distrib par des conseils généraux (site FAQ).
   Usage : node outils/convertir.js export.json [arbres.json] */
const fs = require('fs');
const [src, dest = 'arbres.json'] = process.argv.slice(2);
if (!src) {
  console.error('Usage : node outils/convertir.js export.json [arbres.json]');
  process.exit(1);
}
const entree = JSON.parse(fs.readFileSync(src, 'utf8'));
const REMPLACEMENTS = [
  [/\n*Dans la déclaration, indiquez ce que vous avez déjà essayé : l’équipe gagnera du temps\./g, '\n\nIndiquez au réparateur ce que vous avez déjà essayé : il gagnera du temps.'],
  [/vous pourrez refaire ce parcours ou déclarer un SAV\./g, 'vous pourrez refaire ce parcours.'],
  [/Il faut l’équipe SAV/g, 'Une réparation est nécessaire'],
  [/L’équipe s’en occupe\./g, 'Confiez-le à un réparateur.'],
  [/Contactez le SAV pour savoir comment le déposer ou l’envoyer en sécurité\./g, 'Faites remplacer la batterie par un réparateur.'],
  [/Précisez « chargeur » dans la déclaration\./g, 'Remplacez-le par un chargeur compatible avec votre ordinateur.'],
  [/Si elle a été fournie avec l’ordinateur, déclarez un SAV\./g, 'Remplacez-la : n’importe quelle souris USB fait l’affaire.'],
  [/il sera utile si vous contactez le SAV\./g, 'il vous aidera à chercher une solution ou à vous faire aider.'],
  [/Déclarez le SAV rapidement en précisant que l’écran était cassé dès la réception, avec une photo si possible\./g, 'Signalez-le rapidement à la personne ou à la structure qui vous a remis l’ordinateur, avec une photo si possible.'],
  [/(contactez le SAV|déclarez un SAV) en décrivant ce qui s’affiche/g, 'faites-le examiner par un réparateur en décrivant ce qui s’affiche'],
  [/Le SAV n’a pas accès à vos comptes en ligne\./g, 'Seul le site concerné peut vous rendre l’accès à votre compte.'],
  [/l’équipe s’en charge\./g, 'faites-vous aider par un réparateur.'],
  [/L’équipe vous aide à retrouver l’accès/g, 'Faites-vous aider pour retrouver l’accès'],
  [/Préparez une pièce justifiant que l’ordinateur vous a bien été remis : l’équipe pourra vous la demander\./g, 'Préparez une preuve que l’ordinateur vous appartient (facture, attestation) : on pourra vous la demander.'],
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
const textes = arbres.flatMap((a) =>
  Object.values(a.etapes).flatMap((e) => [e.titre, e.texte, e.astuce, ...e.reponses.map((r) => r.libelle)]),
);
const reste = textes.filter((t) => /déclar|\bSAV\b|l’équipe/i.test(t || ''));
console.log(`${arbres.length} arbres écrits dans ${dest}` + (reste.length ? `\nÀ relire :\n- ${[...new Set(reste)].join('\n- ')}` : ''));
