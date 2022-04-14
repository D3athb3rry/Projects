var swipes = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 1,
  navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

const currentFraction = document.querySelector('.swiper-current-count');
swipes.on('activeIndexChange', () => {
  let index = swipes.realIndex;
  currentFraction.textContent = `0${index + 1}`;
})

