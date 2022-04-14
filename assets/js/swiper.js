var swipes = new Swiper(".welcome-container .swiper-container", {
  loop: true,
  slidesPerView: 1,
  navigation: {
        nextEl: '.welcome-container .swiper-button-next',
        prevEl: '.welcome-container .swiper-button-prev',
    },
  pagination: {
    el: ".welcome-container .swiper-pagination",
    clickable: true
  }
});

const currentFraction = document.querySelector('.welcome-container .swiper-current-count');
swipes.on('activeIndexChange', () => {
  let index = swipes.realIndex;
  currentFraction.textContent = `0${index + 1}`;
})

