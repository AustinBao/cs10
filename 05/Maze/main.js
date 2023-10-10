// MAZE BY AUSTIN

// GET CANVAS
let cnv = document.getElementById("mycanvas");
cnv.width = 400;
cnv.height = 400;
let ctx = cnv.getContext("2d");

// LISTEN TO KEY BEING PRESSED
document.addEventListener("keydown", moveBox);
document.getElementById("reset").addEventListener("click", reset);

let progress = document.getElementById("progress");

// DECLARING VARIABLES
let x = 330;
let y = 5;
let boxDim = 50;
let px, py;

function reset() {
  x = 330;
  y = 5;
  boxDim = 50;
  document.getElementById("progress").innerHTML = "Begin!";
  document.getElementById("progress").style.color = "black";
  draw();
}

function moveBox(event) {
  let keyPressed = event.code;
  px = x;
  py = y;
  if (x < 0.5 * cnv.width) {
    progress.innerHTML = "Almost there...";
  } else {
    progress.innerHTML = "Keep going...";
  }
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

function isCollide(walls, boxX, boxY, boxDim) {
  for (wall in walls) {
    let wall1Left = walls[wall].x,
      wall1Right = walls[wall].x + walls[wall].width,
      wall1Bot = walls[wall].y + walls[wall].height,
      wall1Top = walls[wall].y;

    let rect2Left = boxX,
      rect2Right = boxX + boxDim,
      rect2Bot = boxY + boxDim,
      rect2Top = boxY;

    if (
      rect2Bot > wall1Top &&
      rect2Top < wall1Bot &&
      rect2Right > wall1Left &&
      rect2Left < wall1Right
    ) {
      return true;
    }
  }
}

// function progress(boxX) {
//   if (boxX < 0.5 * cnv.width) {
//     progress.innerHTML = "Keep going...";
//   } else {
//     progress.innerHTML = "Almost there...";
//   }
// }

let walls = {
  wall1: { x: 70, y: 0, width: 5, height: 340 },
  wall2: { x: 130, y: 60, width: 5, height: 340 },
  wall3: { x: 190, y: 0, width: 5, height: 340 },
  wall4: { x: 250, y: 60, width: 5, height: 340 },
  wall5: { x: 310, y: 0, width: 5, height: 340 },
};

requestAnimationFrame(draw);
function draw() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // DRAW OBJECTIVE
  ctx.fillStyle = "green";
  ctx.fillRect(5, 5, 50, 50);

  // DRAW MAZE WALLS
  ctx.fillStyle = "black";
  ctx.fillRect(70, 0, 5, 340);
  ctx.fillRect(130, 60, 5, 340);
  ctx.fillRect(190, 0, 5, 340);
  ctx.fillRect(250, 60, 5, 340);
  ctx.fillRect(310, 0, 5, 340);

  // DRAW MOVING BOX
  ctx.fillStyle = "blue";
  ctx.fillRect(x, y, boxDim, boxDim);

  if (x == 5 && y == 5) {
    document.getElementById("progress").innerHTML = "Success!";
    document.getElementById("progress").style.color = "green";
    return;
  }

  if (isCollide(walls, x, y, boxDim)) {
    document.getElementById("progress").innerHTML = "Try Again";
    document.getElementById("progress").style.color = "red";
    return;
  }
  requestAnimationFrame(draw);
}
