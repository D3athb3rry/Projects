var swipesVideo = new Swiper(".video-swiper-container", {
  loop: true,
  spaceBetween: 50,
  slidesPerView: 3,
  navigation: {
        nextEl: '.video-swiper-container .swiper-button-next',
        prevEl: '.video-swiper-container .swiper-button-prev',
    },
  pagination: {
    el: ".video-swiper-container .swiper-pagination",
    clickable: true
  },
  breakpoints: {
    420: {
        slidesPerView: 2,
    },
    768: {
        slidesPerView: 2,
    }
  }
});


