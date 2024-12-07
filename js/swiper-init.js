const swiper_new = new Swiper('#swiper-01', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

// And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
breakpoints: {
    // when window width is >= 767px
    767: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 1,
      spaceBetween: 20
    }
  }
});