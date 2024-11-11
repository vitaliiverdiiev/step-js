"use strict";

import { DATA } from "./data.js";
import { filterData } from "./filter.js";
import {
  formPreventDefault,
  getFilterCriteria,
  sortingButtonSelectStyles,
} from "./helpers.js";
import { renderCards } from "./trainers.js";
import { showHiddenElementsOnLoad } from "./showHiddenElementsOnLoad.js";
import { sort } from "./sort.js";
import { showLoader } from "./showLoader.js";

document.addEventListener("DOMContentLoaded", () => {
  const sortingButtons = document.querySelectorAll(".sorting__btn");
  const filterButton = document.querySelector(".filters__submit");
  const form = document.querySelector(".sidebar__filters");
  showLoader();

  setTimeout(() => {
    showHiddenElementsOnLoad();
    renderCards(DATA);
    document.querySelector('.loader').classList.remove("loader");
  }, 1000)

  // const loaderContainer = document.querySelector(".page-wrapper");
  // loaderContainer.removeChild(loader);


  formPreventDefault(form);

  filterButton.addEventListener("click", () => {
    return renderCards(filterData(DATA, getFilterCriteria(form)));
  });

  sortingButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      sortingButtonSelectStyles(sortingButtons, button);

      renderCards(
        sort(filterData(DATA, getFilterCriteria(form)), event.target.outerText)
      );
    });
  });
});
