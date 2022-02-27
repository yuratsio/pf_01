'use strict';

window.addEventListener('DOMContentLoaded', () => {
  // ==============================
  // hamburger-menu--active
  // ==============================
  const navMenu = document.querySelector('.nav-menu');
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const hamburgerMenuText = document.querySelector('.hamburger-menu__text');
  hamburgerMenuText.textContent = 'MENU';
  hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('hamburger-menu--active');
    if(hamburgerMenu.classList.contains('hamburger-menu--active')) {
      hamburgerMenuText.textContent = 'CLOSE';
    } else {
      hamburgerMenuText.textContent = 'MENU';
    }
    navMenu.classList.toggle('nav-menu--active');
  });
  // ==============================
  // smoothscroll
  // ==============================
  const ankerLinks = document.querySelectorAll('a[href^="#"]');
  ankerLinks.forEach(ankerLink => {
    ankerLink.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(ankerLink.hash);
      const targetTop = window.pageYOffset + target.getBoundingClientRect().top;
      const headerHeight = document.querySelector('#header').clientHeight;
      window.scroll({
        top: targetTop - headerHeight,
        behavior: "smooth",
      });
      hamburgerMenu.classList.remove('hamburger-menu--active');
      navMenu.classList.remove('nav-menu--active');
    });
  });
  // ==============================
  // fade-in-item
  // ==============================
  const fadeInItems = document.querySelectorAll('.fade-in-item');
  const fadeInActive = function(entries, obs) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add('fade-in-item--active');
      obs.unobserve(entry.target);
    });
  };
  const options = {
    threshold: .2,
  }
  const observer = new IntersectionObserver(fadeInActive, options);
  fadeInItems.forEach(fadeInItem => {
    observer.observe(fadeInItem);
  });
});
