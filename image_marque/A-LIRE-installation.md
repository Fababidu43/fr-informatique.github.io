# Installation du favicon sur fr-informatique.com

1. Copiez tous les fichiers de ce dossier (sauf ce fichier) à la racine de votre site
   (là où se trouve déjà `index.html`).

2. Dans le `<head>` de chaque page (ou dans votre template commun), ajoutez :

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#14163f">
```

3. Videz le cache de votre navigateur (Ctrl+F5) pour voir le nouveau favicon
   apparaître dans l'onglet.

Le fichier `icon-master-1024.png` est la source haute résolution : gardez-le
de côté si vous avez besoin de régénérer une taille plus tard.
