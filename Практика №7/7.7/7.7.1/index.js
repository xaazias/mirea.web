let timer = document.getElementById('timer');

function startTimer(){
    window.setInterval(function() {
        timer.innerHTML = parseInt(timer.innerHTML) + 1;
    }, 1000);
}