// Keyboard input test (not my code; just testing it out)

let cnv = document.getElementById("mycanvas");
let ctx = cnv.getContext("2d");

let x = 100;
let mouseIsPressed = false;

requestAnimationFrame(draw);
function draw() {
  if (mouseIsPressed) {
    x++;
  }

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.fillStyle = "blue";
  ctx.fillRect(x, 100, 50, 50);

  requestAnimationFrame(draw);
}

document.addEventListener("mousedown", keyPressHandler);
document.addEventListener("mouseup", mouseupHandler);

function keyPressHandler() {
  mouseIsPressed = true;
}

function mouseupHandler() {
  mouseIsPressed = false;
}
