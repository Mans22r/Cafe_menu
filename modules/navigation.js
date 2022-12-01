import { createMenuSection, getMenu } from './menuSection.js';
import createContactPage from './contact.js';

const navbarVisibility = (navBar) => {
  if (window.innerWidth > 600) {
    navBar.style.visibility = 'visible';
  }
};

const toggleElements = (navBar, exitBtn, hamburgerMenu) => {
  navBar.style.visibility = 'hidden';
  exitBtn.classList.add('hide');
  hamburgerMenu.classList.remove('hide');
};

const navigate = () => {
  const homePage = document.getElementById('home-page');
  const navBar = document.querySelector('nav');
  const exitBtn = document.querySelector('.fa-times');
  const hamburgerMenu = document.querySelector('.fa-bars');
  const navList = [...document.querySelectorAll('li')];

  navList.forEach((item) => item.addEventListener('click', (e) => {
    switch (e.target.id) {
      case 'home':
        homePage.classList.remove('hide');
        toggleElements(navBar, exitBtn, hamburgerMenu);
        if (document.getElementById('contact-page')) {
          document.getElementById('contact-page').remove();
        } else if (document.getElementById('menu-section')) {
          document.getElementById('menu-section').remove();
        }
        navbarVisibility(navBar);
        break;
      case 'menu':
        createMenuSection();
        toggleElements(navBar, exitBtn, hamburgerMenu);
        getMenu('Vegan');
        homePage.classList.add('hide');
        if (document.getElementById('contact-page')) {
          document.getElementById('contact-page').remove();
        }
        navbarVisibility(navBar);
        break;
      case 'contact':
        createContactPage();
        toggleElements(navBar, exitBtn, hamburgerMenu);
        homePage.classList.add('hide');
        if (document.getElementById('menu-section')) {
          document.getElementById('menu-section').remove();
        }
        navbarVisibility(navBar);
        break;
      default:
        break;
    }
  }));
};

export default navigate;
