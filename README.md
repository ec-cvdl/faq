# Dépannage informatique

Petit site statique d'aide au dépannage d'ordinateurs : la personne choisit son problème,
répond à quelques questions, suit les conseils. Si ce n'est pas réglé, le site l'oriente vers le
SAV Emmaüs Connect de sa région. Aucun serveur, aucune base, aucune donnée envoyée.

Les parcours viennent de l'outil de dépannage de La Distrib (Emmaüs Connect).

## Fichiers

| Fichier | Rôle |
| --- | --- |
| `index.html`, `app.js`, `style.css` | le site |
| `arbres.json` | les parcours (format `cvdl-depannage`) |
| `config.json` | titre, texte d'accueil, contacts SAV par région, contact de repli |
| `outils/convertir.js` | met à jour `arbres.json` depuis un export La Distrib |

## Héberger

N'importe quel hébergement de fichiers statiques : GitHub Pages (Settings → Pages → branche
`main`, dossier racine), Netlify, un serveur Apache/Nginx…

En local : `python3 -m http.server 8000` puis http://localhost:8000 (ouvrir `index.html`
directement ne marche pas : le navigateur bloque la lecture des `.json`).

Chaque problème a son lien direct : `…/#internet`, `…/#charge`, `…/#contact`.

## Renseigner les contacts SAV

Dans `config.json`, une entrée par région :

```json
{
  "region": "Île-de-France",
  "nom": "SAV Emmaüs Connect Paris",
  "adresse": "…",
  "telephone": "01 23 45 67 89",
  "email": "sav@…",
  "site": "https://…",
  "horaires": "Lun–ven, 9 h–17 h"
}
```

Champs vides = non affichés. Sans région choisie ou pour « Autre », le texte et le lien de
`repli` s'affichent. La région choisie est retenue dans le navigateur.

`batterieSemaines` : délai de prise en charge de la batterie après la remise (0 pour ne pas
l'afficher).

## Mettre à jour les parcours

1. Exporter les arbres depuis La Distrib (admin → Dépannage → exporter), ou récupérer la route
   publique `depannage-arbres` de l'API.
2. `node outils/convertir.js export.json arbres.json`

Le script ne garde que les parcours publiés et remplace « déclarer un SAV » par « contacter le
SAV ». Il signale les tournures à relire.

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

`fin` : `""` (question), `resolu`, `sav` (contacter le SAV) ou `hors` (hors garantie, avec
`motif` : chute, liquide, batterie, virus, mises-a-jour, application).
