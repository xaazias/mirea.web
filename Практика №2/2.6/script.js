function addProgress() {
    let bar = document.getElementById("my-progress");
    bar.value += 10;
    document.getElementById("p-progress").innerHTML = `Progress - ${bar.value}%`;
}

function addMeter() {
    let bar = document.getElementById("my-meter");
    bar.value += 10;
    document.getElementById("p-meter").innerHTML = `Meter - ${bar.value}%`;
}