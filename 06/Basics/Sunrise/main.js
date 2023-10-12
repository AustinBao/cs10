// SUNRISE CANVAS BY AUSTIN

// GET CANVAS
let cnv = document.getElementById("mycanvas");
let ctx = cnv.getContext("2d");

// GET IMG
let cloudimg = document.getElementById("cloth-cloud.png");

// MAKE THE WHOLE CANVAS BLUE TO SIMULATE THE SKY
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 400, 400);

// FILL THE BOTTOM THIRD OF THE CANVAS IN GREEN TO REPRESENT THE GRASS
ctx.fillStyle = "green";
ctx.fillRect(0, 300, 400, 100);

// DRAW HALF CIRCLE ABOVE THE GREEN RECTANGLE
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(200, 300, 20, 0, Math.PI, 1);
ctx.fill();

// LOAD TWO IMAGES OF CLOUDS
ctx.drawImage(cloudimg, 125, 100);
ctx.drawImage(cloudimg, 175, 75);
