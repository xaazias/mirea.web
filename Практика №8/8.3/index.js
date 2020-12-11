function makeEaseOut(timing) {
    return function(timeFraction) {
      return 1 - timing(1 - timeFraction);
    }
}

const bounceAnim = (timing) => {
    for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
        if (timing >= (7 - 4 * a) / 11)
            return -Math.pow((11 - 6 * a - 11 * timing) / 4, 2) + Math.pow(b, 2)
    }
}

ball.onclick = function() {

    let to = area.clientHeight - ball.clientHeight;

    animate({
        duration: 2000,
        timing: makeEaseOut(bounceAnim),
        draw(progress) {
            ball.style.top = to * progress + 'px'
        }
    });
};