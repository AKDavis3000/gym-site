// change the color of the nav bar after a certain scroll point
// nav
const navOpen = document.querySelector('.fa-bars');
const navClose = document.querySelector('.fa-x');
const navMenu = document.querySelector('nav');

// open nav with click of bars
const openNavMenu = () => {
  navMenu.style.display = 'block';

  // removes scroll while nav is open
  document.body.style.overflow = 'hidden';
};
navOpen.addEventListener('click', openNavMenu);

// close nav with x mark
const closeNavMenu = () => {
  navMenu.style.display = 'none';
  // adds scroll while nav is closed
  document.body.style.overflow = 'visible';
};
navClose.addEventListener('click', closeNavMenu);

// highlight active nav link
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add('active');
  }
});

// loader
const loaderContainer = document.querySelector('.loader-container');

window.addEventListener('load', () => {
  loaderContainer.classList.add('hidden');
});
