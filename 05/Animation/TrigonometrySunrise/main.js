// SUNRISE CANVAS BY AUSTIN

// GET CANVAS
let cnv = document.getElementById("mycanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

// GET IMG
let cloudimg = document.getElementById("cloth-cloud.png");

// MAKE THE WHOLE CANVAS BLUE TO SIMULATE THE SKY
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 400, 400);

// FILL THE BOTTOM THIRD OF THE CANVAS IN GREEN TO REPRESENT THE GRASS
ctx.fillStyle = "green";
ctx.fillRect(0, 300, 400, 100);

// ~~~~~ANIMATION~~~~~ //

let degree = 0;
let radius = 100;

requestAnimationFrame(rotatingSun);
function rotatingSun() {
  let sunX = radius * Math.cos(degree);
  let sunY = radius * Math.sin(degree);

  degree++;

  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(sunX, sunY, radius, 0, 2 * Math.PI);
  ctx.fill();

  requestAnimationFrame(rotatingSun);
}
