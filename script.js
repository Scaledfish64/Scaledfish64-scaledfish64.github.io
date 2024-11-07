const letters = document.querySelectorAll('.swish-letter');

let lastMouseX = 0;
let lastMouseY = 0;
let mouseSpeedX = 0;
let mouseSpeedY = 0;

function trackMouseMove(event) {
    mouseSpeedX = event.pageX - lastMouseX;
    mouseSpeedY = event.pageY - lastMouseY;

    lastMouseX = event.pageX;
    lastMouseY = event.pageY;
}

function trackTouchMove(event) {
    const touch = event.touches[0]; 
    if (!touch) return; 

    mouseSpeedX = touch.pageX - lastMouseX;
    mouseSpeedY = touch.pageY - lastMouseY;

    lastMouseX = touch.pageX;
    lastMouseY = touch.pageY;
}

function swishSingleLetter(event) {
    const letter = event.target;

    const scaleFactor = 20;

    const translateX = mouseSpeedX * scaleFactor;
    const translateY = mouseSpeedY * scaleFactor;

    letter.style.transform = `translate(${translateX}px, ${translateY}px)`;
    letter.style.transition = "transform 4s ease-out"; 
}

if ('ontouchstart' in window) {
    document.addEventListener('touchmove', trackTouchMove, { passive: true });
    document.addEventListener('touchstart', (event) => {
        lastMouseX = event.touches[0].pageX;
        lastMouseY = event.touches[0].pageY;
    });
} else {
    document.addEventListener('mousemove', trackMouseMove);
}

letters.forEach(letter => {
    letter.addEventListener('mouseenter', swishSingleLetter);
});
