let canvas = document.getElementById("my-canvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "purple";
ctx.fillRect(10, 5, 280, 140);

ctx.fillStyle = "orange";
ctx.fillRect(78, 39, 140, 70);

ctx.fillText("Корольков А. Д.", 20, 20, 100);