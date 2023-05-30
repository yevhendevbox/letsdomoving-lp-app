const navMenu = document.querySelector('.mobile-menu');
const toggler = document.querySelector('.mobile-menu--toggler');

function handleToggleMenu() {
  navMenu.classList.toggle('open');
  toggler.classList.toggle('toggled');
}
toggler.addEventListener('click', handleToggleMenu);