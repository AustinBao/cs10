// COLLISION BY AUSTIN

// GET CANVAS
let cnv = document.getElementById("mycanvas");
cnv.width = 400;
cnv.height = 400;
let ctx = cnv.getContext("2d");

// LISTEN TO KEY BEING PRESSED
document.addEventListener("keydown", moveBox);

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
  } else if (keyPressed === "Space") {
    boxX = 160;
    boxY = 250;
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

  // CHANGES HTML ELEMENT DEPENDING IF BLACK BOX "COLLIDES" WITH GREEN BOXES
  if (isCollide(rectangles, boxX, boxY, 50)) {
    document.getElementById("collide").innerHTML = "TRUE";
  } else {
    document.getElementById("collide").innerHTML = "FALSE";
  }
  requestAnimationFrame(draw);
}
