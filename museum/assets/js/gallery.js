const pictureInnerContainer = document.querySelector('.picture-inner-container');
const img = document.createElement('img');
img.classList.add('gallery-img')
img.src = `assets/img/gallery/galery.jpg`;
img.alt = `galery`;
pictureInnerContainer.append(img);

function shuffle(pictureInnerContainer) {
    for (let i = pictureInnerContainer.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));