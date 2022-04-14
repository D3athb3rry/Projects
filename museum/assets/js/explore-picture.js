var divisor = document.getElementById("explore-divisor"),
    handle = document.getElementById("explore-handle"),
    slider = document.getElementById("explore-slider");

function moveDivisor() {
  handle.style.left = slider.value+"%";
	divisor.style.width = slider.value+"%";
}

window.onload = function() {
	moveDivisor();
};