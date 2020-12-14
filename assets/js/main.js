const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu__items');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger--active');
    menu.classList.toggle('menu__items--open');
});