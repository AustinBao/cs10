// CITYSCAPE ASGN START CODE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 300;
cnv.height = 650;

// BLUE BACKGROUND
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, cnv.width, cnv.height);

// DRAW LEFT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(0, 350, 150, 300);
// Middle Section
ctx.fillRect(20, 200, 110, 150);
// Triangle Top
ctx.beginPath();
ctx.moveTo(20, 200);
ctx.lineTo(130, 200);
ctx.lineTo(130, 100);
ctx.fill();

// DRAW RIGHT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(150, 100, 150, 550);
// Medium Top
ctx.fillRect(170, 40, 110, 60);
// Small Top
ctx.fillRect(190, 20, 70, 20);

// ~~~~~ OWN WORK ~~~~~~ //

// FILL STYLE AT THE START TO MAKE IT SO ALL THE LINES I DRAW AFTER ARE WHITE
ctx.fillStyle = "white";

// LONG WINDOWS ON RIGHT BUILDING
for (let x = 0; x < 5; x++) {
  ctx.fillRect(170 + 25 * x, 120, 10, 500);
}
// HORIZONTAL RECTANGLES ON LEFT BUILDING
for (let y = 0; y < 6; y++) {
  ctx.fillRect(25, 375 + 45 * y, 100, 20);
}

// NESTED FOR LOOP TO DRAW ALL THE WINDOWS IN EACH ROW OF ONE COLUMN AND THEN MOVE ONTO THE NEXT COLUMN
for (let col = 0; col < 4; col++) {
  for (let row = 0; row < 6; row++) {
    ctx.fillRect(40 + 20 * col, 210 + 20 * row, 10, 10);
  }
}
