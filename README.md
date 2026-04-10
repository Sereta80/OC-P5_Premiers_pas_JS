# Projet 5 OpenClassrooms : <img width="23" height="24" alt="tricolor-icon" src="https://github.com/user-attachments/assets/982057aa-1b66-4a69-bee0-8337fb5df8ad" /> Print It - Carrousel JavaScript
Ce projet consiste à dynamiser un site statique pour une imprimerie nommée Print It.<br> Il a été réalisé dans le cadre de la formation "Intégrateur Web" d'OpenClassrooms.<br>

<img width="400" alt="preview-Print-It-readme" src="https://github.com/user-attachments/assets/1b845772-fad9-4dc8-b856-946265c36f77" />

## 🎯 Objectifs du projet
L'objectif principal était de créer un slider interactif fonctionnel en utilisant JavaScript (manipulation du DOM, événements et tableaux).

## 🌐 Démo en ligne
Ce projet est hébergé sur GitHub Pages. Vous pouvez le consulter ici : 👉 [Site Print It](https://sereta80.github.io/OC-P5_Premiers_pas_JS/)

## 🚀 Fonctionnalités
- Navigation par flèches : Passage à la slide suivante ou précédente au clic sur les flèches directionnelles.

- Boucle infinie : Le carrousel revient au début après la dernière slide et inversement.

- Indicateurs (Dots) : Mise à jour dynamique des points de navigation en bas du slider.

- Contenu dynamique : Changement simultané de l'image et du texte (tagline) pour chaque slide.

## 🛠️ Technologies utilisées
-  HTML5 / CSS3 (Structure et mise en forme fournie)

- JavaScript :

  - Gestion des événements (`addEventListener`)

  - Manipulation du DOM (`querySelector`, `createElement`, `classList`)

  - Tableaux d'objets et boucles (`forEach`)

## 📂 Structure du code JavaScript
- `slides` : Tableau d'objets contenant les chemins des images et les légendes.

- `currentIndex` : Variable d'état permettant de suivre la position actuelle dans le slider.

- `updateSlider()` : Fonction principale qui synchronise l'affichage visuel avec l'index actuel.

## Installation et utilisation
Si vous souhaitez tester le projet localement, suivez ces étapes :

1. Cloner le dépôt :
```bash
git clone https://github.com/Sereta80/OC-P5_Premiers_pas_JS.git
```
2. Accéder au dossier :
```bash
cd OC-P5_Premiers_pas_JS
```
3. Lancer le projet :<br>
Il suffit d'ouvrir le fichier index.html dans votre navigateur ou d'utiliser une extension de type "Live Server" sur VS Code.

---

*Séréta THAI - Étudiante Intégratrice Web chez OpenClassrooms 2026*
