const letters = document.querySelectorAll('.swish-letter');

let lastMouseX = 0;
let lastMouseY = 0;
let mouseSpeedX = 0;
let mouseSpeedY = 0;

console.log("Yo! I'm Tharun Thangavel, but you'll probaly see me as Scaledfish64. High School Hacker at Cumberland Valley, if it can be opened, I'll do it!")
console.log("Just know if you found this, you're awesome!")
console.log("And I may or may not have done this for free boba ;)")

document.addEventListener('mousemove', (event) => {
    mouseSpeedX = event.pageX - lastMouseX;
    mouseSpeedY = event.pageY - lastMouseY;

    lastMouseX = event.pageX;
    lastMouseY = event.pageY;
});

function swishSingleLetter(event) {
    const letter = event.target;

    const scaleFactor = 20;

    const translateX = mouseSpeedX * scaleFactor;
    const translateY = mouseSpeedY * scaleFactor;

    letter.style.transform = `translate(${translateX}px, ${translateY}px)`;
    letter.style.transition = "transform 4s ease-out";
}

letters.forEach(letter => {
    letter.addEventListener('mouseenter', swishSingleLetter);
});
