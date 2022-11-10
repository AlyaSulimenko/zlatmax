// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
console.log(window.innerWidth);

const documentActions = (event) => {
  const targetElement = event.target;
  const submenuCatalogue = document.querySelector(".submenu-catalogue");
  //clicking on .menu-catalogue__link:
  if (
    targetElement.closest("[data-parent]") //&& window.innerWidth >= 992
  ) {
    const submenuId = targetElement.dataset.parent;
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
    //if any link in it is orange(active) & U cklick on other, that link looses activity, new clicked gets, appr submenu block opens
    if (activeLink && activeLink !== targetElement) {
      activeLink.classList.remove("_catalogue-link-active");
      showActiveBlock();
    }
    // if U click on active link it looses activity, appr submenu block closes
    else if (activeLink && activeLink === targetElement) {
      targetElement.classList.remove("_catalogue-link-active");
      submenuBlockChosen.classList.remove("_submenu-block-chosen");
    }
    //if no link is active, just make the clicked one active & show appr submenu
    else if (!activeLink) {
      showActiveBlock();
    }
    event.preventDefault();
  }
  //else if (
  //   targetElement.closest("[data-parent]") &&
  //   window.innerWidth < 992
  // ) {
  //   const submenuId = targetElement.dataset.parent;
  //   const submenuListChosen = document.querySelector(
  //     `[data-list="${submenuId}"]`
  //   );

  //   submenuListChosen.classList.toggle("_submenu-catalogue-list-chosen");
  //   console.log("now style");
  // }
  //To open 'Catalogue of goods': .menu-catalogue gets class of .catalogue-open
  if (targetElement.closest(".menu-top-header__link_catalogue")) {
    document.documentElement.classList.add("catalogue-open");
    event.preventDefault();
  }
  //On ckiking <-Go Back in 'Catalogue of goods' .menu-catalogue looses .catalogue-open, links in it loose .active(orange),submenu blocks loose .chosen
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
  //On clicking <-Go Back in 'Catalogue of knives' etc .menu-catalogue looses .catalogue-open, links in it loose .active(orange),submenu blocks loose .chosen
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
