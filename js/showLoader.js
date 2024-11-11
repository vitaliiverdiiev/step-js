export function showLoader() {
  const loader = document.createElement("span");
  loader.classList.add("loader");

  const loaderContainer = document.querySelector(".page-wrapper");
  loaderContainer.appendChild(loader);
}