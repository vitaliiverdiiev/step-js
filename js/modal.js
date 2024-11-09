import { setGlobalScroll, updateModalItem } from "./helpers.js";

export function showModal(trainer) {
  setGlobalScroll(true);

  const modalContainer = document.getElementById("modal");
  const modalTemplate = document.getElementById("modal-template");
  const modal = modalTemplate.content.cloneNode(true);

  modal.querySelector(".modal__name").textContent = trainer["first name"];
  modal.querySelector(".modal__img").src = trainer.photo;
  modal.querySelector(".modal__point--category").textContent =
    updateModalItem("Категорія", trainer.category);
  modal.querySelector(".modal__point--experience").textContent =
    updateModalItem("Досвід", trainer.experience);
  modal.querySelector(".modal__point--specialization").textContent =
    updateModalItem("Напрям тренера", trainer.specialization);
  modal.querySelector(".modal__text").textContent = trainer.description;

  const closeModal = modal.querySelector(".modal__close");
  closeModal.addEventListener("click", () => {
    modalContainer.innerHTML = "";
    setGlobalScroll(false);
  });

  modalContainer.appendChild(modal);
}

