// COLLISION BY AUSTIN

// https://www.jeffreythompson.org/collision-detection/index.php
// https://happycoding.io/tutorials/processing/collision-detection
// https://www.youtube.com/watch?v=_MyPLZSGS3s

// GET CANVAS
let cnv = document.getElementById("mycanvas");
cnv.width = 400;
cnv.height = 400;
let ctx = cnv.getContext("2d");

// LISTEN TO KEY BEING PRESSED
document.addEventListener("keydown", moveBox);

// DECLARING VARIABLES
let x = 160,
  y = 250;
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
    x = 160;
    y = 250;
  }
}

function isCollide(boxDim) {
  let xLeft = 150,
    xRight = 220,
    yBot = 220,
    yTop = 150;

  let farleft = x,
    farright = x + boxDim,
    bottom = y + boxDim,
    top = y;

  if (bottom > yTop && top < yBot && farright > xLeft && farleft < xRight) {
    return true;
  }
  return false;
}
let x1 = 130;
let y1 = 120;

let x2 = 200;
let y2 = 150;
requestAnimationFrame(draw);
function draw() {
  x1--;
  x2--;

  let rectangles = [];

  if (x1 + 60 < 0) {
    x1 = cnv.width;
    y1 = Math.random() * 200;
    rectangles.push(x1, y1);
    console.log(rectangles);
  }

  if (x2 + 60 < 0) {
    x2 = cnv.width;
    y2 = Math.random() * 200;
    rectangles.push(x2, y2);
    console.log(rectangles);
  }

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.fillStyle = "green";
  ctx.fillRect(150, 150, 70, 70);

  // MOVING BOX
  ctx.fillRect(x1, y1, 60, 60);
  ctx.fillRect(x2, y2, 60, 60);

  ctx.fillStyle = "black";
  ctx.fillRect(x, y, 50, 50);

  if (isCollide(50)) {
    document.getElementById("collide").innerHTML = "TRUE";
  } else {
    document.getElementById("collide").innerHTML = "FALSE";
  }
  requestAnimationFrame(draw);
}
