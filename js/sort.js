import { renderCards } from "./trainers.js";

export function sortByName(data) {
  return data.sort((a, b) => {
    const lastNameA = a["last name"].toLowerCase();
    const lastNameB = b["last name"].toLowerCase();

    if (lastNameA < lastNameB) return -1;
    if (lastNameA > lastNameB) return 1;

    return 0;
  });
}

export function sortByExperience(data) {
  return data.sort((a, b) => {
    const A = Number(a["experience"].split(" ")[0]);
    const B = Number(b["experience"].split(" ")[0]);

    if (A > B) return -1;
    if (A < B) return 1;

    return 0;
  });
}

export function sort(data) {
  const sortedData = [...data];
  const sortingButtons = document.querySelectorAll(".sorting .sorting__btn");

  sortingButtons.forEach((button) => {
    button.addEventListener("click", () => {
      sortingButtons.forEach((btn) =>
        btn.classList.remove("sorting__btn--active")
      );

      button.classList.add("sorting__btn--active");

      if (button.innerText === "ЗА ПРІЗВИЩЕМ") {
        return renderCards(sortByName(sortedData));
      }
      if (button.innerText === "ЗА ДОСВІДОМ") {
        return renderCards(sortByExperience(sortedData));
      }

      return renderCards(data);
    });
  });
}