import { getFilterCriteria, mapFormValues } from "./helpers.js";
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

      return (specializationMatch && categoryMatch);
    });

    return renderCards((filteredTrainers));
  });
}

   