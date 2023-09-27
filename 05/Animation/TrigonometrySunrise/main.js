// ROTATING SUNRISE BY AUSTIN

// GET CANVAS
let cnv = document.getElementById("mycanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

// MAKE THE WHOLE CANVAS BLACK TO SIMULATE THE NIGHT
drawSky("#000000");

// FILL THE BOTTOM THIRD OF THE CANVAS IN GREEN TO REPRESENT THE GRASS
drawGround("#008000");

// ~~~~~ANIMATION~~~~~ //

let degree = 2;
let radius = 200;

setInterval(rotatingSun, 200);
function rotatingSun() {
  // CALCULATE THE X AND Y CORD OF THE SUN USING TRIGONOMETRY
  let sunX = 200 + radius * Math.cos(degree);
  let sunY = 300 + radius * Math.sin(degree);

  // INCREASING DEGREE TO SIMULATE THE SUN ROTATING ON A AXIS
  if (degree < 360) {
    degree += 0.1;
  }

  // IF STATEMENTS TO CHECK LOCATION OF THE SUN IN THE SKY
  if (sunX < 200 && sunY > 120 && sunY < 300) {
    // MORNING
    drawSky("#89CFF0");
    drawSun(sunX, sunY);
    drawGround("#9FE2BF");
    document.getElementById("popup").innerHTML = "IT'S MORNING";
  } else if (sunY < 120) {
    // NOON
    drawSky("#00FFFF");
    drawSun(sunX, sunY);
    drawGround("#7CFC00");
    document.getElementById("popup").innerHTML = "IT'S NOON";
  } else if (sunX > 200 && sunY > 120 && sunY < 300) {
    // AFTERNOON
    drawSky("#00008B");
    drawSun(sunX, sunY);
    drawGround("#4F7942");
    document.getElementById("popup").innerHTML = "IT'S AFTERNOON";
  } else if (sunY > 300) {
    // NIGHT
    drawSky("#000000");
    drawSun(sunX, sunY);
    drawGround("#008000");
    document.getElementById("popup").innerHTML = "IT'S NIGHT";
  }
}

function drawSky(hexColor) {
  // DRAWS SKY ACCORDING TO HEXCOLOR
  ctx.fillStyle = `${hexColor}`;
  ctx.fillRect(0, 0, 400, 300);
}

function drawSun(x, y) {
  // DETERMINES THE COLOR OF THE SUN DEPENDING ON ITS POSTION IN THE SKY
  if (y < 350 && y > 200) {
    ctx.fillStyle = "#E97451";
  } else if (y < 120) {
    ctx.fillStyle = "#FF5F1F";
  } else {
    ctx.fillStyle = "#FFAC1C";
  }
  ctx.beginPath();
  ctx.arc(x, y, 30, 0, 2 * Math.PI);
  ctx.fill();
}

function drawGround(hexColor) {
  // DRAWS GROUND ACCORDING TO HEXCOLOR
  ctx.fillStyle = `${hexColor}`;
  ctx.fillRect(0, 300, 400, 100);
}
