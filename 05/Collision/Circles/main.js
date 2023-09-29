// COLLISION BY AUSTIN

// https://www.jeffreythompson.org/collision-detection/index.php
// https://happycoding.io/tutorials/processing/collision-detection
// https://www.youtube.com/watch?v=_MyPLZSGS3s

// GET CANVAS
let cnv = document.getElementById("mycanvas");
cnv.width = 400;
cnv.height = 400;
let ctx = cnv.getContext("2d");

// DRAW CIRCLE

// LISTEN TO KEY BEING PRESSED
document.addEventListener("keydown", moveBox);

// DECLARING VARIABLES
let x = 330;
let y = 5;
let px, py;

function moveBox(event) {
  let keyPressed = event.code;
  px = x;
  py = y;
  if (keyPressed === "ArrowRight") {
    x += 5;
  } else if (keyPressed === "ArrowLeft") {
    x -= 5;
  } else if (keyPressed === "ArrowUp") {
    y -= 5;
  } else if (keyPressed === "ArrowDown") {
    y += 5;
  } else if (keyPressed === "Space") {
    x = 330;
    y = 5;
  }
}

requestAnimationFrame(draw);
function draw() {
  ctx.clearRect(px, py, 50, 50);

  ctx.fillStyle = "blue";
  ctx.fillRect(x, y, 50, 50);

  requestAnimationFrame(draw);
}
