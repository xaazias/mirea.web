const bounceAnim = (timing) => {
    for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
        if (timing >= (7 - 4 * a) / 11)
            return -Math.pow((11 - 6 * a - 11 * timing) / 4, 2) + Math.pow(b, 2)
    }
}

function animateTextInput(element) {
    
    let text = element.value;
    let to = text.length, from = 0;

    animate({
        duration: 5000,
        timing: bounceAnim,
        draw: function(progress) {
            let result = (to - from) * progress + from;
            element.value = text.substr(0, Math.ceil(result))
        }
    });
}