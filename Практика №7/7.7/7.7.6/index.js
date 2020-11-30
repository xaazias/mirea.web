function timeNow() {
    
    const today = new Date();
    
    let hour = 24 - today.getHours();
    let min = 60 - today.getMinutes();
    let sec = 60 - today.getSeconds();
    
    const clock = document.getElementById('clock');
    
    if (hour < 10) {
      hour = '0' + hour;
    }
    if (min < 10) {
      min = '0' + min;
    }
    if (sec < 10) {
      sec = '0' + sec;
    }

    clock.innerHTML = `${hour}:${min}:${sec}`;
};

window.timerId = window.setInterval(timeNow, 500);