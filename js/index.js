"use strict";

import { DATA } from "./data.js";
import { getFilterCriteria, mapFormValues } from "./helpers.js";
import { showHiddenElementsOnLoad } from "./showHiddenElementsOnLoad.js";
import { sort } from "./sort.js";
import { renderCards } from "./trainers.js";

const getCurrentSortBy = (buttons) => {
  return [...buttons].filter((button) => {
    if (button.classList.contains("sorting__btn--active")) {
      console.log(button.textContent.trim());
      return button.textContent.trim();
    }
  });
};

const filterData = (form,  buttons) => {
  const { specialization, category } = getFilterCriteria(form);

  let filteredTrainers = DATA.filter((trainer) => {
    const specializationMatch =
      specialization === "all" ||
      trainer.specialization.toLowerCase() ===
        mapFormValues(specialization).toLowerCase();

    const categoryMatch =
      category === "all" ||
      trainer.category.toLowerCase() === mapFormValues(category).toLowerCase();

    return specializationMatch && categoryMatch;
  });

  const sortBy = getCurrentSortBy(buttons)
  console.log({sortBy})
  return filteredTrainers;
};
document.addEventListener("DOMContentLoaded", () => {
  showHiddenElementsOnLoad();
  renderCards(DATA);

  const sortingButtons = document.querySelectorAll(".sorting__btn");
  const form = document.querySelector(".sidebar__filters");
  const filterButton = document.querySelector(".filters__submit");

  document.querySelector(".filters__submit").addEventListener("click", () => {
    return renderCards(DATA);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  filterButton.addEventListener("click", () => {
    renderCards(filterData(form, sortingButtons));
  });
  sortingButtons.forEach(button => {
    button.addEventListener("click", (event) => {
      sortingButtons.forEach((btn) =>
        btn.classList.remove("sorting__btn--active")
      );

      button.classList.add("sorting__btn--active");

      console.log(event.target.outerText);

      renderCards(sort(filterData(form, sortingButtons), event.target.outerText));
    
    });
  });
});
