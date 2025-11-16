// Récupération des éléments html5
const counter = document.querySelector(".counter");
const addOneBtn = document.querySelector(".add");
const subtractOneBtn = document.querySelector(".subtract");
const addFiveBtn = document.querySelector(".add.five");
const subtractFiveBtn = document.querySelector(".subtract.five");
const resetBtn = document.querySelector(".reset");

// Création de la variable pour stocker la valeur du compteur (initialisée à 0)
let count = 0;

// Déclaration de la fonction updateCounterDisplay permettant la mise à jour l'affichage du compteur
const updateCounterDisplay = () => {
  counter.textContent = "Compteur : " + count; // Affiche le texte souhaité
};

// Déclaration de la fonction addOneToCounter permettant d'afficher une unité de plus au compteur
const addOneToCounter = () => {
  count++; // Incrémente le compteur de 1
  // Appel de la fonction updateCounterDisplay()
  updateCounterDisplay();
};

// Ecoute de l'événement "click" sur le bouton +1 et appel de la fonction addOneToCounter()
addOneBtn.addEventListener("click", addOneToCounter);

// Déclaration de la fonction addFiveToCounter permettant d'afficher 5 unités de plus au compteur
const addFiveToCounter = () => {
  count += 5; // Incrémente le compteur de 5
  // Appel de la fonction updateCounterDisplay()
  updateCounterDisplay();
};

// Ecoute de l'événement "click" sur le bouton +5 et appel de la fonction addFiveToCounter()
addFiveBtn.addEventListener("click", addFiveToCounter);

// Déclaration de la fonction subtractOneToCounter permettant de soustraire une unité au compteur
const subtractOneToCounter = () => {
  count--; // Décrémente le compteur de 1
  // Appel de la fonction updateCounterDisplay()
  updateCounterDisplay();
};

// Ecoute de l'événement "click" sur le bouton -1 et appel de la fonction subtractOneToCounter()
subtractOneBtn.addEventListener("click", subtractOneToCounter);

// Déclaration de la fonction subtractFiveToCounter permettant de soustraire 5 unités au compteur
const subtractFiveToCounter = () => {
  count -= 5; // Décrémente le compteur de 5
  // Appel de la fonction updateCounterDisplay()
  updateCounterDisplay();
};

// Ecoute de l'événement "click" sur le bouton -5 et appel de la fonction subtractFiveToCounter()
subtractFiveBtn.addEventListener("click", subtractFiveToCounter);

// Déclaration de la fonction resetCounter qui va permettre une remise à zéron du compteur
const resetCounter = () => {
  count = 0; // Remise à 0 du compteur
  // Appel de la fonction updateCounterDisplay()
  updateCounterDisplay();
};

// Ecoute de l'événement "click" sur le bouton reset et appel de la fonction resetCounter()
resetBtn.addEventListener("click", resetCounter);
