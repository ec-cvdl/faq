# Dépannage informatique

Petit site statique d'aide au dépannage d'ordinateurs : la personne choisit son problème,
répond à quelques questions, suit les conseils. C'est une FAQ : elle aide à se dépanner seul et
dit quand une réparation est nécessaire. Aucun serveur, aucune base, aucune donnée envoyée.

Les parcours viennent de l'outil de dépannage de La Distrib (Emmaüs Connect).

## Fichiers

| Fichier | Rôle |
| --- | --- |
| `index.html`, `app.js`, `site.css` | le site |
| `design/` | design de La Distrib (styles, illustrations, logo), recopié tel quel |
| `arbres.json` | les parcours (format `cvdl-depannage`) |
| `config.json` | titre de l'onglet, texte d'accueil, logo |
| `outils/convertir.js` | met à jour `arbres.json` depuis un export La Distrib |
| `outils/importer-design.js` | met à jour `design/` depuis le dépôt front de La Distrib |

## Héberger

N'importe quel hébergement de fichiers statiques : GitHub Pages (Settings → Pages → branche
`main`, dossier racine), Netlify, un serveur Apache/Nginx…

En local : `python3 -m http.server 8000` puis http://localhost:8000 (ouvrir `index.html`
directement ne marche pas : le navigateur bloque la lecture des `.json`).

Chaque problème a son lien direct : `…/#internet`, `…/#charge`.

## Réglages (`config.json`)

- `titre` : titre de l'onglet du navigateur ;
- `sousTitre` : texte sous « Quel problème rencontrez-vous ? » (vide = masqué) ;
- `logo` : `false` pour masquer le logo.

## Mettre à jour les parcours

1. Exporter les arbres depuis La Distrib (admin → Dépannage → exporter), ou récupérer la route
   publique `depannage-arbres` de l'API.
2. `node outils/convertir.js export.json arbres.json`

Le script ne garde que les parcours publiés et remplace les renvois vers le SAV de La Distrib par
des conseils généraux (« une réparation est nécessaire », « faites-vous aider par un
réparateur »…). Il liste les phrases qui parlent encore de SAV : à ajouter dans ses
`REMPLACEMENTS`.

## Mettre à jour le design

Le rendu est celui de La Distrib : `design/` contient ses feuilles de style, ses illustrations et
le moteur qui les dessine. Ne rien modifier dans `design/` ; après un changement de design dans
La Distrib :

```
node outils/importer-design.js ../La-Distrib-CVL-Front
```

Les polices Inter et Space Grotesk viennent de Google Fonts (appelé par `cvdl-ui.css`). Mettre
`"logo": false` dans `config.json` pour masquer le logo.

## Format d'un parcours

```json
{
  "identifiant": "internet",
  "titre": "Impossible de se connecter à Internet",
  "description": "…",
  "symptomes": ["Wifi ne se connecte plus"],
  "depart": "debut",
  "etapes": {
    "debut": {
      "titre": "…", "texte": "…", "astuce": "…",
      "media": { "type": "image|video", "url": "https://…", "nom": "…" },
      "fin": "",
      "reponses": [{ "libelle": "Oui", "cible": "autre_etape" }]
    }
  }
}
```

`fin` : `""` (question), `resolu`, `sav` (réparation nécessaire) ou `hors` (hors garantie, avec
`motif` : chute, liquide, batterie, virus, mises-a-jour, application).
