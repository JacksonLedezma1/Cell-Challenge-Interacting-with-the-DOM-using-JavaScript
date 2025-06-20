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
