let hamburger_button = document.getElementById("hamburger-icon");
let hamburger_menu = document.getElementById("hamburger-menu");
const sections = document.querySelectorAll("section");
console.log(sections);

// TOGGLE HAMBURGER MENU
hamburger_button.addEventListener("click", () => {
  toggleHamburgerMenu();
});

// toggle hamburger menu
function toggleHamburgerMenu() {
  hamburger_menu.classList.toggle("hamburger-open");
}

// SCROLL & REVEAL
