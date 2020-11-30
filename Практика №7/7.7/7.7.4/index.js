let images = [
    "https://www.w3schools.com/howto/img_nature_wide.jpg",
    "https://www.w3schools.com/howto/img_snow_wide.jpg",
    "https://www.w3schools.com/howto/img_lights_wide.jpg",
    "https://www.w3schools.com/howto/img_mountains_wide.jpg"
];

window.timerId = window.setInterval(timer, 1000);

let img = document.getElementById('img'), counter = 0;

function timer() {
    counter++;
    img.src = images[counter % 4];
}