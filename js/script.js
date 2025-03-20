let hamburger_button = document.getElementById("hamburger-icon");
let hamburger_menu = document.getElementById("hamburger-menu");

hamburger_button.addEventListener("click", () => {
  toggleHamburgerMenu();
});

// toggle hamburger menu
function toggleHamburgerMenu() {
  console.log("opning...");
  hamburger_menu.classList.toggle("hamburger-open");
}
