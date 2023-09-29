// SUNRISE CANVAS BY AUSTIN

// GET CANVAS
let cnv = document.getElementById("mycanvas");
cnv.width = 400;
cnv.height = 400;
let ctx = cnv.getContext("2d");

// DRAW MAZE
ctx.fillStyle = "green";
ctx.fillRect(5, 5, 50, 50);

ctx.moveTo(60, 0);
ctx.lineTo(60, 340);
ctx.stroke();
ctx.moveTo(120, 400);
ctx.lineTo(120, 60);
ctx.stroke();
ctx.moveTo(180, 0);
ctx.lineTo(180, 340);
ctx.stroke();
ctx.moveTo(240, 400);
ctx.lineTo(240, 60);
ctx.stroke();
ctx.moveTo(300, 0);
ctx.lineTo(300, 340);
ctx.stroke();

document.addEventListener("keydown", moveBox)

let x = 350;
let y = 350;
let topleft, topright, botleft, botright;
let px, py;
let keyDown = false;

function moveBox(event){
  let keyPressed = event.code;
  px = x
  py = y
  if (keyPressed === "ArrowRight") {
    x+=5; 
  } else if (keyPressed === "ArrowLeft") {
    x-=5;
  } else if (keyPressed === "ArrowUp") {
    y-=5;
  } else if (keyPressed === "ArrowDown") {
    y+=5;
  } else if (keyPressed === "Space") {
    x = 350;
    y = 350;
  } 
}



requestAnimationFrame(draw);
function draw() {

  ctx.fillStyle = "white";
  ctx.fillRect(px, py, 50, 50);

  ctx.fillStyle = "blue";
  ctx.fillRect(x, y, 50, 50);

  requestAnimationFrame(draw);
}
