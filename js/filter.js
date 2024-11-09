import { getFilterCriteria, mapFormValues } from "./helpers.js";
import { sortByExperience, sortByName } from "./sort.js";
import { renderCards } from "./trainers.js";

export function filterBySpecialization(data, specialization) {
  return data.filter((trainer) => {
    if (specialization === "all") {
      return data;
    }

    return (
      trainer.specialization.toLowerCase() ===
      mapFormValues(specialization).toLowerCase()
    );
  });
}

export function filterByCategory(data, category) {
  return data.filter((trainer) => {
    if (category === "all") {
      return data;
    }

    return (
      trainer.category.toLowerCase() ===
      mapFormValues(category).toLowerCase()
    );
  });
}

export function filter(data) {
  const form = document.querySelector(".sidebar__filters");

  form.addEventListener("submit", (e) => {
    e.preventDefault();


    const { specialization, category } = getFilterCriteria(form);

    let filteredTrainers = data.filter((trainer) => {
      const specializationMatch =
        specialization === "all" ||
        trainer.specialization.toLowerCase() ===
          mapFormValues(specialization).toLowerCase();

      const categoryMatch =
        category === "all" ||
        trainer.category.toLowerCase() === mapFormValues(category).toLowerCase();

      return specializationMatch && categoryMatch;
    });

    renderCards(filteredTrainers);

    const sortingButtons = document.querySelectorAll(".sorting .sorting__btn");
    sortingButtons.forEach((button) => {
      button.addEventListener("click", () => {
        sortingButtons.forEach((btn) => btn.classList.remove("sorting__btn--active"));
        button.classList.add("sorting__btn--active");

        if (button.innerText === "ЗА ПРІЗВИЩЕМ") {
          filteredTrainers = sortByName(filteredTrainers);
        } else if (button.innerText === "ЗА ДОСВІДОМ") {
          filteredTrainers = sortByExperience(filteredTrainers);
        }

        renderCards(filteredTrainers);
      });
    });
  });
}