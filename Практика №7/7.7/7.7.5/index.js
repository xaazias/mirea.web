let images = [
    "https://www.w3schools.com/howto/img_nature_wide.jpg",
    "https://www.w3schools.com/howto/img_snow_wide.jpg",
    "https://www.w3schools.com/howto/img_lights_wide.jpg",
    "https://www.w3schools.com/howto/img_mountains_wide.jpg",
    "https://lutzschmitt.com/thumbs/news/privacy-by-default-video-of-my-talk-at-the-ia-summit-2017/vancouver-rick-schwartz-flickr-cc-by-nc-2-1000x350.jpg"
];

let t;

function start() {
    t = window.setInterval(timer, 2000);
}

function stop() {
    window.clearInterval(t);
}

let img = document.getElementById('img'), counter = 0;

function timer() {
    counter++;
    img.src = images[counter % 5];
}