// COLLISION BY AUSTIN

// GET CANVAS
let cnv = document.getElementById("mycanvas");
cnv.width = 400;
cnv.height = 400;
let ctx = cnv.getContext("2d");

// LISTEN TO KEY BEING PRESSED
document.addEventListener("keydown", moveBox);

// LISTENS TO BTN CLICK AND RESETS PAGE
let resetbtn = document
  .getElementById("reset")
  .addEventListener("click", reset);

function reset() {
  boxX = 160;
  boxY = 300;
  // MAKES THE CLONE APPEAR OFF THE CANVAS WHICH "RESETS" IT
  cloneX = -10000;
  cloneY = -10000;
  rectangles = {
    rect1: { x: 100, y: 120, width: 60, height: 60 },
    rect2: { x: 200, y: 150, width: 60, height: 60 },
    rect3: { x: 300, y: 200, width: 60, height: 60 },
  };
  draw();
}

// PLACE A CLONE FOR YOU TO TELEPORT BACK TO
let cloneX, cloneY;

function moveBox(event) {
  // ALLOWS THE MOVEMENT OF THE BLACK BOX
  let keyPressed = event.code;
  if (keyPressed === "ArrowRight") {
    boxX += 5;
  } else if (keyPressed === "ArrowLeft") {
    boxX -= 5;
  } else if (keyPressed === "ArrowUp") {
    boxY -= 5;
  } else if (keyPressed === "ArrowDown") {
    boxY += 5;
    // SET CLONE
  } else if (keyPressed === "KeyZ") {
    cloneX = boxX;
    cloneY = boxY;
    // TELEPORT TO CLONE
  } else if (keyPressed === "KeyX") {
    boxX = cloneX;
    boxY = cloneY;
  }
}

function isCollide(rectangles, boxX, boxY, boxDim) {
  // TO DETECT IF I TOUCH ANY RECTANGLE
  for (rect in rectangles) {
    let rect1Left = rectangles[rect].x,
      rect1Right = rectangles[rect].x + rectangles[rect].width,
      rect1Bot = rectangles[rect].y + rectangles[rect].height,
      rect1Top = rectangles[rect].y;

    let rect2Left = boxX,
      rect2Right = boxX + boxDim,
      rect2Bot = boxY + boxDim,
      rect2Top = boxY;

    if (
      rect2Bot > rect1Top &&
      rect2Top < rect1Bot &&
      rect2Right > rect1Left &&
      rect2Left < rect1Right
    ) {
      return true;
    }
  }
}

// DECLARING VARIABLES + EASY TO ADD MORE COLLISION OBJECTS
let rectangles = {
  rect1: { x: 100, y: 120, width: 60, height: 60 },
  rect2: { x: 200, y: 150, width: 60, height: 60 },
  rect3: { x: 300, y: 200, width: 60, height: 60 },
};

let boxX = 160,
  boxY = 300;

requestAnimationFrame(draw);
function draw() {
  // RESET SQUARES WHEN OFF SCREEN
  rectangles.rect1.x--;
  rectangles.rect2.x--;
  rectangles.rect3.x--;

  if (rectangles.rect1.x + 60 < 0) {
    rectangles.rect1.x = cnv.width;
    rectangles.rect1.y = Math.random() * 200;
  }
  if (rectangles.rect2.x + 60 < 0) {
    rectangles.rect2.x = cnv.width;
    rectangles.rect2.y = Math.random() * 200;
  }
  if (rectangles.rect3.x + 60 < 0) {
    rectangles.rect3.x = cnv.width;
    rectangles.rect3.y = Math.random() * 200;
  }

  // CLEARS PREVIOUS BOXES
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // MOVING GREEN BOXS
  ctx.fillStyle = "green";
  ctx.fillRect(rectangles.rect1.x, rectangles.rect1.y, 60, 60);
  ctx.fillRect(rectangles.rect2.x, rectangles.rect2.y, 60, 60);
  ctx.fillRect(rectangles.rect3.x, rectangles.rect3.y, 60, 60);

  // CONTROLED BOX
  ctx.fillStyle = "black";
  ctx.fillRect(boxX, boxY, 50, 50);

  // MARKS THE CLONE
  ctx.strokeStyle = "red";
  ctx.setLineDash([6]);
  ctx.strokeRect(cloneX, cloneY, 50, 50);

  // CHANGES HTML ELEMENT DEPENDING IF BLACK BOX "COLLIDES" WITH GREEN BOXES
  if (isCollide(rectangles, boxX, boxY, 50)) {
    document.getElementById("collide").innerHTML = "TRUE";

    // WRITE GAME OVER WHEN YOU COLLIDE
    ctx.font = "50px Arial";
    ctx.fillStyle = "red";
    ctx.fillText("Game Over", 70, 100);

    document.getElementById("reset").style.display = "block";
    // IDK WHY THE RESET BUTTON WONT GO TO THE MIDDLE AND SHOWS UP ON THE SIDE
    document.getElementById("reset").style.alignItems = "center";

    return;
  } else {
    document.getElementById("collide").innerHTML = "FALSE";
    // KEEPS THE RESET BUTTON HIDEN IF YOU HAVENT COLLIDED YET
    document.getElementById("reset").style.display = "none";
  }
  requestAnimationFrame(draw);
}
