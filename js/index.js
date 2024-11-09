"use strict";

import { DATA } from "./data.js";
import { filter } from "./filter.js";
import { showHiddenElementsOnLoad } from "./showHiddenElementsOnLoad.js";
import { renderCards } from "./trainers.js";



document.addEventListener("DOMContentLoaded", () => {
  
  showHiddenElementsOnLoad();
  
  renderCards(DATA);

  // sort(DATA);

  filter(DATA)

});

// ["first name", "last name", "photo", "specialization", "category", 'experience', 'description']
