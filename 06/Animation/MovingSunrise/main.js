// SUNRISE CANVAS BY AUSTIN

// GET CANVAS
let cnv = document.getElementById("mycanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

// GET IMG
let cloudimg = document.getElementById("cloth-cloud.png");

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
    // updates rgb color (green)
    green++;
  }

  // Stops the sun from flying off the canvas and stops it at 101
  if (sunheight > 120) {
    sunheight -= 1;
  }
  sunradius += 0.5;

  // DRAW CANVAS
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, 400, 400); // Background

  ctx.fillStyle = "green";
  ctx.fillRect(0, 300, 400, 100); // Ground

  // Draw moving clouds. Use abs value to make clouds same speed but different directions
  ctx.drawImage(cloudimg, 175 + Math.abs(cloudx), 75);
  ctx.drawImage(cloudimg, 125 + cloudx, 100);

  // Draw sun over everything else
  ctx.fillStyle = "rgb(" + red + "," + green + ", 0)";
  ctx.beginPath();
  ctx.arc(200, sunheight, sunradius, 0, 2 * Math.PI);
  ctx.fill();

  // REQUEST ANIMATION FRAME
  requestAnimationFrame(animate);
}
