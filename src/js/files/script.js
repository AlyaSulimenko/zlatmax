// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
console.log(window.innerWidth);

const documentActions = (event) => {
  const targetElement = event.target;
  const submenuCatalogue = document.querySelector(".submenu-catalogue");
  const submenuId = targetElement.dataset.parent;
  //clicking on .menu-catalogue__link in desctop mode
  if (targetElement.closest("[data-parent]") && window.innerWidth >= 992) {
    const activeLink = document.querySelector("._catalogue-link-active");
    const submenuBlockChosen = document.querySelector(
      `[data-submenu="${submenuId}"]`
    );
    const showActiveBlock = () => {
      submenuCatalogue.classList.add("_submenu-catalogue-opened");
      document
        .querySelectorAll(".submenu-catalogue__block")
        .forEach((block) => {
          block.classList.remove("_submenu-block-chosen");
        });
      targetElement.classList.add("_catalogue-link-active");
      submenuBlockChosen.classList.add("_submenu-block-chosen");
    };

    if (activeLink && activeLink !== targetElement) {
      activeLink.classList.remove("_catalogue-link-active");
      showActiveBlock();
    } else if (activeLink && activeLink === targetElement) {
      targetElement.classList.remove("_catalogue-link-active");
      submenuBlockChosen.classList.remove("_submenu-block-chosen");
    } else if (!activeLink) {
      showActiveBlock();
    }
    event.preventDefault();
  }
  //clicking on .menu-catalogue__link in tablet mode
  else if (targetElement.closest("[data-parent]") && window.innerWidth < 992) {
    const submenuListChosen = document.querySelector(
      `[data-list="${submenuId}"]`
    );
    submenuListChosen.classList.add("_submenu-list_chosen");
    console.log("class submenu-catalogue__list_chosen added to data-list");
    event.preventDefault();
  }
  //To open 'Catalogue of goods'
  if (targetElement.closest(".menu-top-header__link_catalogue")) {
    document.documentElement.classList.add("catalogue-open");
    event.preventDefault();
  }
  //On ckiking <-Go Back in 'Catalogue of goods'
  if (targetElement.closest(".menu-catalogue__back")) {
    document.documentElement.classList.remove("catalogue-open");
    document.querySelector("_catalogue-link-active")
      ? document.documentElement.classList.remove("_catalogue-link-active")
      : null;
    document.querySelector("_submenu-block-chosen")
      ? document.documentElement.classList.remove("_submenu-block-chosen")
      : null;
    event.preventDefault();
  }
  //On clicking <-Go Back in 'Catalogue of knives' etc
  if (targetElement.closest(".submenu-catalogue__back")) {
    submenuCatalogue.classList.remove("_submenu-catalogue-opened");
    document
      .querySelector("._catalogue-link-active")
      .classList.remove("_catalogue-link-active");
    document
      .querySelector("._submenu-block-chosen")
      .classList.remove("_submenu-block-chosen");
    event.preventDefault();
  }
};

document.addEventListener("click", documentActions);
