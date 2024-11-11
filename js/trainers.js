import { resetCards } from './helpers.js';
import { showModal } from './modal.js';

export function createTrainerCard(trainer) {
  const template = document.getElementById("trainer-card");
  const trainerCard = template.content.cloneNode(true);

  trainerCard.querySelector(".trainer__img").src = trainer.photo;
  trainerCard.querySelector(
    ".trainer__name"
  ).textContent = `${trainer["first name"]} ${trainer["last name"]}`;

  trainerCard.querySelector(".trainer__show-more").addEventListener("click", () => {
    showModal(trainer)
  });

  return trainerCard;
}

export function renderTrainerCard(trainer, place) {
  const card = createTrainerCard(trainer);

  place.appendChild(card);
}

export function renderCards(data) {
  resetCards();
  
  const trainersCards = document.getElementById("trainers-card");
  
  data.forEach(
    (trainer) => renderTrainerCard(trainer, trainersCards)
  );
}