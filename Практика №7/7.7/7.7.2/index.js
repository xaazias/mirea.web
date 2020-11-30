let timer = document.getElementById('timer');
let interval;

function startTimer() {
    interval = window.setInterval(function() {
        timer.innerHTML = parseInt(timer.innerHTML) + 1;
    }, 1000);
}

function stopTimer() {
    window.clearInterval(interval);
}