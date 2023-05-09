import '../css/style.scss';
require.context('../images', false, /\.(png|svg|jpg)$/);

const header = document.querySelector('header');
const nav = document.querySelector('nav');
const hamburger = document.querySelector('.nav-hamburger');

hamburger.addEventListener('click', () => {
  header.classList.toggle('menu-open');
  nav.classList.toggle('active');
});