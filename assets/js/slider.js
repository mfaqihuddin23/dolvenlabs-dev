const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  // Optional parameters
  direction: 'horizontal',
  freeMode: false,
  speed: 5000,
  loop: true,
  autoplay: {
    delay: 0,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const swiper1 = new Swiper('.swiper1', {
  slidesPerView: 'auto',
  // Optional parameters
  direction: 'horizontal',
  freeMode: false,
  speed: 5000,
  loop: true,
  autoplay: {
  reverseDirection: true,
  delay: 0,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const swiper2 = new Swiper('.swiper2', {
  slidesPerView: 'auto',
  spaceBetween: 100,
  // Optional parameters
  direction: 'horizontal',
  freeMode: false,
  speed: 5000,
  loop: true,
  autoplay: {
    delay: 0,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const swiper3 = new Swiper('.swiper3', {
  slidesPerView: 'auto',
  spaceBetween: 100,
  // Optional parameters
  direction: 'horizontal',
  freeMode: false,
  speed: 5000,
  loop: true,
  autoplay: {
    delay: 0,
    reverseDirection: true,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});