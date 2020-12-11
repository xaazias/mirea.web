animImage.onclick = function() {
    
    let startTime = Date.now();

    let timer = setInterval(function() {   
        let timePassed = Date.now() - startTime;
        
        animImage.style.left = timePassed / 5 + 'px';
        if (timePassed > 2000) clearInterval(timer);
    }, 20);
}