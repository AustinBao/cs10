// SUNRISE CANVAS BY AUSTIN

// GET CANVAS
var canvas = document.getElementById("mycanvas"),
  ctx = canvas.getContext("2d"),
  width = 400;
height = 400;

canvas.width = canvas.height = 400;

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
  var imageData = ctx.getImageData(0, 0, width, height),
    inputData = imageData.data,
    pData = (~~x + ~~y * width) * 4;

  // console.log(imageData);
  // console.log(inputData);

  if (inputData[pData + 3]) {
    return true;
  }

  return false;
}

canvas.addEventListener("mousemove", function (e) {
  var x = e.pageX,
    y = e.pageY;
  console.log(detectLine(x, y));
});
