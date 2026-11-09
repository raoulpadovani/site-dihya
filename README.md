# Dihya — site statique

Site vitrine du restaurant Dihya (Marseille), en **HTML / CSS / JS pur**, sans backend ni base de données.

## Structure

- `index.html` — Accueil
- `menu.html` — Carte du restaurant (filtres par catégorie + fiche plat)
- `reservation.html` — Réservation (via téléphone / WhatsApp)
- `traiteur.html` — Devis événementiel (via téléphone / WhatsApp)
- `about.html` — À propos
- `galerie.html` — Galerie photo
- `assets/css/style.css` — Styles du site
- `assets/js/main.js` — Menu mobile, filtres de la carte, fiche plat
- `assets/img/` — Images du site

## Utilisation

Aucune installation ni serveur n'est nécessaire : ouvrez `index.html` dans un navigateur,
ou servez le dossier avec n'importe quel serveur statique (ex. `python -m http.server`).

## Contenu de la carte

Les plats, catégories et prix affichés sur `menu.html` et `index.html` sont des **exemples
à adapter** (aucune carte réelle n'était disponible en dur dans l'ancien projet : elle était
saisie via un espace d'administration relié à une base de données, aujourd'hui supprimé).
Modifiez directement les blocs `.carte-dish` dans `menu.html` pour mettre à jour la carte.

## Ce qui a été retiré

- Le backend Node.js/Express et la base de données (réservations, devis, authentification,
  espace admin).
- Les formulaires de réservation et de devis (remplacés par des liens téléphone/WhatsApp).
- Les pages Connexion / Inscription / Profil / Administration.
