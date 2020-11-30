window.timerId = window.setInterval(timer, 500);

function timer() {
    
    let clock = document.getElementById('clock');
    let date = new Date();
    
    clock.innerHTML = addZero(date.getHours())+':'+addZero(date.getMinutes())+':'+addZero(date.getSeconds());
}
function addZero(num) {
    if (num <= 9) return '0'+ num;
    else return num;
}