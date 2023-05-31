const navMenu = document.querySelector('.mobile-menu');
const toggler = document.querySelector('.mobile-menu--toggler');
const links = [...navMenu.querySelectorAll('.menu-item--link')];
const cards = document.querySelector(".plans-cards");
const cardButtons = [...cards.querySelectorAll(".btn")];
const modalOuter = document.querySelector(".modal-outer");
const modalInner = document.querySelector(".modal-inner");
console.log(cardButtons);
function handleToggleMenu() {
  navMenu.classList.toggle('open');
  toggler.classList.toggle('toggled');
}
function handleMobileLinkClick() {
  navMenu.classList.remove('open');
  toggler.classList.remove('toggled');
}
function handleCardButtonClick() {
  modalOuter.classList.add("openModal");
}
function closeModal() {
  modalOuter.classList.remove("openModal");
}
modalOuter.addEventListener("click", function (event) {
  const isOutside = !event.target.closest(".modal-inner");
  if (isOutside) {
    closeModal();
  }
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

cardButtons.forEach((button) =>
  button.addEventListener("click", handleCardButtonClick)
);
toggler.addEventListener('click', handleToggleMenu);
links.forEach(link => link.addEventListener('click', handleMobileLinkClick));

