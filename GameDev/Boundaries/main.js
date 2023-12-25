let cnv = document.getElementById("mycanvas");
cnv.width = 400;
cnv.height = 400;
let ctx = cnv.getContext("2d");

green = { x: 5, y: 5, w: 50, h: 50 };
blue = { x: 100, y: 100, w: 50, h: 50 };

document.addEventListener("keydown", moveBox);

function moveBox(event) {
  if (event.code === "ArrowUp") {
    blue.y -= 10;
  }
  if (event.code === "ArrowDown") {
    blue.y += 10;
  }
  if (event.code === "ArrowLeft") {
    blue.x -= 10;
  }
  if (event.code === "ArrowRight") {
    blue.x += 10;
  }
  if (event.code === "KeyW") {
    green.y -= 10;
  }
  if (event.code === "KeyA") {
    green.x -= 10;
  }
  if (event.code === "KeyS") {
    green.y += 10;
  }
  if (event.code === "KeyD") {
    green.x += 10;
  }
  console.log(event.code);
}

requestAnimationFrame(animate);

function animate() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.fillStyle = "green";
  ctx.fillRect(green.x, green.y, green.w, green.h);

  ctx.fillStyle = "blue";
  ctx.fillRect(blue.x, blue.y, blue.w, blue.h);

  requestAnimationFrame(animate);
}
