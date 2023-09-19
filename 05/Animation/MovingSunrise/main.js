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

// LOAD TWO IMAGES OF CLOUDS
ctx.drawImage(cloudimg, 125, 100);
ctx.drawImage(cloudimg, 175, 75);

// ~~~~~ANIMATION~~~~~ //

let cloudx = 0;
let sunradius = 20;
let sunheight = 250;

let red = 255;
let green = 0;

requestAnimationFrame(animate);
function animate() {
  // UPDATE ELEMENTS ON CANVAS
  if (cloudx > -225) {
    cloudx--;
    green++;
  }

  sunradius += 0.5;
  sunheight -= 0.5;

  // DRAW CANVAS
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, 400, 160); // Background

  ctx.drawImage(cloudimg, 175 + Math.abs(cloudx), 75);
  ctx.drawImage(cloudimg, 125 + cloudx, 100);

  ctx.fillStyle = "rgb(" + red + "," + green + ", 0)";
  ctx.beginPath();
  ctx.arc(200, sunheight, sunradius, 0, 2 * Math.PI);
  ctx.fill();

  // REQUEST ANIMATION FRAME
  requestAnimationFrame(animate);
}
