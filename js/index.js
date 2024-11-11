"use strict";

import { DATA } from "./data.js";
import { filterData } from "./filter.js";
import { formPreventDefault, getFilterCriteria } from "./helpers.js";
import { renderCards } from "./trainers.js";
import { showHiddenElementsOnLoad } from "./showHiddenElementsOnLoad.js";
import { sort } from "./sort.js";

document.addEventListener("DOMContentLoaded", () => {
  const sortingButtons = document.querySelectorAll(".sorting__btn");
  const filterButton = document.querySelector(".filters__submit");
  const form = document.querySelector(".sidebar__filters");

  showHiddenElementsOnLoad();
  formPreventDefault(form);
  renderCards(DATA);

  filterButton.addEventListener("click", () => {
    return renderCards(filterData(DATA, getFilterCriteria(form)));
  });

  sortingButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      sortingButtons.forEach((btn) =>
        btn.classList.remove("sorting__btn--active")
      );

      button.classList.add("sorting__btn--active");

      renderCards(
        sort(filterData(DATA, getFilterCriteria(form)), event.target.outerText)
      );
    });
  });
});
