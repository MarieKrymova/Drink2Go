//mobile menu
let navMain = document.querySelector('.nav-menu');
let navToggle = document.querySelector('.nav-menu__toggle');

navMain.classList.remove('nav-menu--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('nav-menu--closed')) {
    navMain.classList.remove('nav-menu--closed');
    navMain.classList.add('nav-menu--opened');
  } else {
    navMain.classList.add('nav-menu--closed');
    navMain.classList.remove('nav-menu--opened');
  }
});

// swiper - slider
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

// map
let map = document.querySelector(".map");
map.classList.remove("map--nojs");
