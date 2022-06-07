const buttons = document.querySelectorAll('.book-ripple')

function rippleEffect(e) {

    const button = e.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter/2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.top = `${e.clientY-button.offsetTop-radius}px`;
    circle.style.left = `${e.clientX-button.offsetLeft-radius}px`;


    circle.classList.add('circle')
    console.log(e.clientX, e.clientY);
    console.log(button.offsetLeft, button.offsetTop);
    console.log(e.offsetX, e.offsetY, radius);
    button.appendChild(circle)

    setTimeout(() => circle.remove(), 500)
}


buttons.forEach(button => {
    button.addEventListener('click', rippleEffect)
})