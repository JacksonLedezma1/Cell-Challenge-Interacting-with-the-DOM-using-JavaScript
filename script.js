
// Card data
const emperors = [
  "Augustus",
  "Tiberius",
  "Caligula",
  "Claudius",
  "Nero",
  "Galba",
  "Otho",
  "Vitellius",
  "Vespasian",
  "Titus",
  "Domitian",
  "Nerva",
];
const emperorsImgs = [
  "./assets/img/loopButton/augustus.jpg",
  "./assets/img/loopButton/tiberius.jpg",
  "./assets/img/loopButton/caligula.jpg",
  "./assets/img/loopButton/claudius.jpg",
  "./assets/img/loopButton/nero.jpg",
  "./assets/img/loopButton/galba.jpg",
  "./assets/img/loopButton/otho.jpg",
  "./assets/img/loopButton/vitellius.jpg",
  "./assets/img/loopButton/vespasian.jpg",
  "./assets/img/loopButton/titus.jpg",
  "./assets/img/loopButton/domitian.jpeg",
  "./assets/img/loopButton/nerva.jpg",
];
const emperorsDate = [
  "(27 BCE-14 CE)",
  "(14-37 CE)",
  "(37-41 CE)",
  "(41-54 CE)",
  "(54-68 CE)",
  "(68-69 CE)",
  "(January-April 69 CE)",
  "(July-December 69 CE)",
  "(69-79 CE)",
  "(79-81 CE)",
  "(81-96 CE)",
  "(96-98 CE)",
];

// Main function to show/hide the cards.
function toggleCards() {
  const button = document.querySelector(".toggleButton__button");
  const cardsContainer = document.getElementById("cardsContainer");

  // If the cards are not visible, they get created.

  if (
    cardsContainer.style.display === "none" ||
    cardsContainer.style.display === ""
  ) {
    cardsContainer.style.display = "flex";

    // Clear the document.
    cardsContainer.innerHTML = "";

    // For loop to create each card.
    for (let i = 0; i < emperors.length; i++) {
      // Create tag container for each card.
      const card = document.createElement("article");
      card.classList.add("toggleButton__card");

      // Add each card's image.
      const cardImage = document.createElement("img");
      cardImage.src = emperorsImgs[i];
      cardImage.alt = `Imagen de ${emperors[i]}`;
      cardImage.classList.add("card__image");

      // Add each card's title.
      const cardTitle = document.createElement("h2");
      cardTitle.textContent = emperors[i];
      cardTitle.classList.add("card__title");

      // Add each card's name.
      const cardDate = document.createElement("span");
      cardDate.textContent = emperorsDate[i];
      cardDate.classList.add("card__date");

      // Add each value to the card's content.
      card.appendChild(cardImage);
      card.appendChild(cardTitle);
      card.appendChild(cardDate);

      // Add each card to the main container.
      cardsContainer.appendChild(card);
    }

    // Change button's text to "Hide"
    button.textContent = "Hide";
  } else {
    // Hide the cards if they are visible.
    cardsContainer.style.display = "none";

    // Change button's text to "Show Cards" again.
    button.textContent = "Show Cards";
  }
}

// Logica Boton Mensaje Aleatorio - (Ticket Felipe)

// Estructura de datos para almacenar los mensajes
let arrayMessages = [
  "La vida es corta, sonríe mientras aún tienes dientes.",
  "Haz lo que te haga feliz.",
  "Vive, ríe, ama.",
  "El tiempo cura todas las heridas.",
  "La felicidad está en las pequeñas cosas.",
  "Sé tú mismo, todos los demás ya están ocupados.",
  "Cree en ti mismo.",
  "La vida es un viaje, no un destino."
]

// Obtener los elementos del DOM
const message = document.getElementById("randomMessage")
const btnRandom = document.getElementById("btnRandom")

// Escuchar el click del usuario en el boton y ejecutar una funcion
btnRandom.addEventListener("click", showMessage)

// Por defecto se define el ultimo indice en -1
let lastIndex = -1

// Funcion que muestra el mensaje
function showMessage() {
  let index

  do {
    // Generar un indice random hasta que sea diferente del ultimo indice generado
    index = Math.floor(Math.random() * arrayMessages.length)
  } while (index === lastIndex)
  
  /* 
  Se asgina el indice generado a la variable ultimo indice
  para compararlo con el indice que se genera la siguiente ocasion
  */
  lastIndex = index

  // Asignar el mensaje obtenido mediante el indice al parrafo del DOM
  message.textContent = `"${arrayMessages[index]}"`
}

// --- Contador ---
const counterValue = document.getElementById("counterValue")
const btnIncrement = document.getElementById("increment")
const btnDecrement = document.getElementById("decrement")
const btnReset = document.getElementById("reset")

let count = 0

btnIncrement.addEventListener("click", () => {
  count++
  counterValue.textContent = count
})

btnDecrement.addEventListener("click", () => {
  count--
  counterValue.textContent = count
})

btnReset.addEventListener("click", () => {
  count = 0
  counterValue.textContent = count
})

// Change styles button

const shapes = [
  "toggledShape1",
  "toggledShape2",
  "toggledShape3",
  "toggledShape4",
];
const backgrounds = [
  "toggledBackground1",
  "toggledBackground2",
  "toggledBackground3",
  "toggledBackground4",
];

let shapesIndex = 0;
let backgroundsIndex = 0;

// Function to change shape.

function changeShape() {
  const element = document.getElementById("element");

  // Remove the old shape class
  element.classList.remove(...shapes);

  // Add the new shape class
  element.classList.add(shapes[shapesIndex]);

  // Increase the navigating index and restart if the loop is completed.
  shapesIndex = (shapesIndex + 1) % shapes.length;
}

// Function to change background color.

function changeBackground() {
  const element = document.getElementById("element");

  // Remove the old background class
  element.classList.remove(...backgrounds);

  // Add the new background class
  element.classList.add(backgrounds[backgroundsIndex]);

  // Increase the navigating index and restart if the loop is completed.
  backgroundsIndex = (backgroundsIndex + 1) % backgrounds.length;
}

// Apply the initial styles when loading the page.
document.addEventListener("DOMContentLoaded", function () {
  changeShape();
  changeBackground();
});

