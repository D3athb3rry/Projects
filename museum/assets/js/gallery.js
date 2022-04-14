const pictureInnerContainer = document.querySelector('.picture-inner-container');
var imgArray = [
  "assets/img/Gallery/galery1.jpg",
  "assets/img/Gallery/galery2.jpg",
  "assets/img/Gallery/galery3.jpg",
  "assets/img/Gallery/galery4.jpg",
  "assets/img/Gallery/galery5.jpg",
  "assets/img/Gallery/galery6.jpg",
  "assets/img/Gallery/galery7.jpg",
  "assets/img/Gallery/galery8.jpg",
  "assets/img/Gallery/galery9.jpg",
  "assets/img/Gallery/galery10.jpg",
  "assets/img/Gallery/galery11.jpg",
  "assets/img/Gallery/galery12.jpg",
  "assets/img/Gallery/galery13.jpg",
  "assets/img/Gallery/galery14.jpg",
  "assets/img/Gallery/galery15.jpg"
];      


function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


shuffle(imgArray).map((el, i) => {
  const img = document.createElement('img');
  img.classList.add('gallery-img')
  img.src = el;
  img.alt = i;
  pictureInnerContainer.append(img);
});