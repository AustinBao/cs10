// SUNRISE CANVAS BY AUSTIN

// GET CANVAS
let cnv = document.getElementById("mycanvas");
cnv.width = cnv.height = 400;
let ctx = cnv.getContext("2d");

// draw
ctx.moveTo(40, 0);
ctx.lineTo(40, 360);
ctx.stroke();
ctx.moveTo(80, 400);
ctx.lineTo(80, 40);
ctx.stroke();
ctx.moveTo(120, 0);
ctx.lineTo(120, 360);
ctx.stroke();
ctx.moveTo(160, 400);
ctx.lineTo(160, 40);
ctx.stroke();
ctx.moveTo(0, 100);
ctx.lineTo(400, 100);
ctx.stroke();

function detectLine(x, y) {
  let imageData = ctx.getImageData(0, 0, 400, 400),
    inputData = imageData.data,
    pData = (~~x + ~~y * width) * 4;

  // console.log(imageData);
  // console.log(inputData);

  if (inputData[pData + 3]) {
    return true;
  }

  return false;
}

// function (e) just passes the "event" or "e" to our function to use. In this case its the action of moving one's mouse.
cnv.addEventListener("mousemove", function (e) {
  let x = e.pageX,
    y = e.pageY;
  console.log(detectLine(x, y));
});

let x, y;
x = y = 300;

document.addEventListener("keydown", (event) => {
  let name = event.key;
  let code = event.code;
  if (name === "ArrowRight") {
    x++;
    console.log(x, y);
  } else if (name === "ArrowLeft") {
    x--;
    console.log(x, y);
  } else if (name === "ArrowUp") {
    y++;
    console.log(x, y);
  } else if (name === "ArrowDown") {
    y--;
    console.log(x, y);
  } else if (name === "Space") {
    // idky it wont reset the variable to the original value
    x = y = 300;
  } else {
    // Do nothing.
    console.log(x, y);
    return;
  }
  // draw after updating values
  draw(x, y);
});

requestAnimationFrame(draw);
function draw(x, y) {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.fillStyle = "blue";
  ctx.fillRect(x, y, 50, 50);

  requestAnimationFrame(draw);
}
