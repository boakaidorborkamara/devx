let hamburger_button = document.getElementById("hamburger-icon");
let hamburger_menu = document.getElementById("hamburger-menu");
hamburger_menu.style.display = "none";
let isMenuOpen = false;

hamburger_button.addEventListener("click", () => {
  if (isMenuOpen) {
    closeHamburgerMenu();
  } else if (!isMenuOpen) {
    openHamburgerMenu();
  }
});

// show hamburger menu
function openHamburgerMenu() {
  hamburger_menu.style.display = "";
  isMenuOpen = true;
}

// hide hamburger menu
function closeHamburgerMenu() {
  hamburger_menu.style.display = "none";
  isMenuOpen = false;
}
