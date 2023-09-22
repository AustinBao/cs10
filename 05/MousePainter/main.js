// SUNRISE CANVAS BY AUSTIN

// GET CANVAS
let cnv = document.getElementById("mycanvas");
let ctx = cnv.getContext("2d");

let mouseIsPressed = false;
let mouseX, mouseY, pmouseX, pmouseY;
let penColor;
let size = 5;

requestAnimationFrame(animate);
function animate() {
  if (mouseIsPressed) {
    ctx.strokeStyle = penColor;
    ctx.lineWidth = size;

    ctx.beginPath();
    ctx.moveTo(pmouseX, pmouseY);
    ctx.lineTo(mouseX, mouseY);
    ctx.stroke();
  }

  requestAnimationFrame(animate);
}
// Event Listeners & Handlers
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
document.addEventListener("mousemove", mousemoveHandler);
document.addEventListener("keydown", keydownHandler);
document
  .getElementById("colorpicker")
  .addEventListener("change", changePenColor);

function mousedownHandler() {
  mouseIsPressed = true;
}

function mouseupHandler() {
  mouseIsPressed = false;
}

function mousemoveHandler(event) {
  let cnvRect = cnv.getBoundingClientRect();
  pmouseX = mouseX;
  pmouseY = mouseY;

  mouseX = event.x - cnvRect.x;
  mouseY = event.y - cnvRect.y;
}

function keydownHandler(event) {
  if (event.code == "ArrowUp") {
    size++;
  } else if (event.code == "ArrowDown") {
    size--;
  } else if (event.code == "Space") {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
  } else if (event.code == "Digit1") {
    penColor = "red";
  } else if (event.code == "Digit2") {
    penColor = "green";
  } else if (event.code == "Digit3") {
    penColor = "blue";
  }
}

function changePenColor() {
  penColor = document.getElementById("colorpicker").value;
}
