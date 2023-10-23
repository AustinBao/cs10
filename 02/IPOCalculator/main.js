// IPO CALC by Austin

// listens to changes to our selected value from the html "select" tag 
let formula = document.getElementById("formula-select").addEventListener("change", displayFormula);

// Set variable do I can save space and write less
let result = document.getElementById("answer")

document.getElementById("calculate").addEventListener("click", runFormula)

let inputIds = [];
function displayFormula(event) {
  formula = event.target.value;
  let info = document.getElementById("formula-info")
  // reset input ids whenever we swtich to a new formula so we don't get old variables
  inputIds.length = 0;
  
  // resets the result after switching formulas  
  result.innerHTML = "-----"

  // Changes what the inputs and img depending on what formula was selected
  if (formula === "nothing"){
    info.innerHTML = `<img src="imgs/question-mark.png" alt="question mark" width="500" />`

  } else if (formula === "distpoints"){
    info.innerHTML = `<img src="imgs/distance-formula.png" alt="distance formula" width="500" />
    <p>X1: <input type="number" id="x1"></p>
    <p>Y1: <input type="number" id="y1"></p>
    <p>X2: <input type="number" id="x2"></p>
    <p>Y2: <input type="number" id="y2"></p>`
    // push ids used for each input so we can access users input values later
    inputIds.push("x1", "y1", "x2", "y2")

  } else if (formula === "slope"){
    info.innerHTML = `<img src="imgs/slope.png" alt="slope" width="500" />
    <p>X1: <input type="number" id="x1"></p>
    <p>Y1: <input type="number" id="y1"></p>
    <p>X2: <input type="number" id="x2"></p>
    <p>Y2: <input type="number" id="y2"></p>`
    inputIds.push("x1", "y1", "x2", "y2")
    
  } else if (formula === "heron"){
    info.innerHTML = `<img src="imgs/The-Herons-Formula.png" alt="heron's formula" width="500" />
    <p>A: <input type="number" id="a"></p>
    <p>B: <input type="number" id="b"></p>
    <p>C: <input type="number" id="c"></p>`
    inputIds.push("a", "b", "c")

  } else if (formula === "traparea"){
    info.innerHTML = `<img src="imgs/Area-of-a-Trapezoid.png" alt="Area of a Trapezoid" width="500" />
    <p>A: <input type="number" id="a"></p>
    <p>B: <input type="number" id="b"></p>
    <p>H: <input type="number" id="h"></p>`
    inputIds.push("a", "b", "h")
  }
}


function runFormula(){
// Create new list called values to store all the user's int inputs
  let values = [];
  // loop through all input ids to find all of user's input and push to values array
  for (let i = 0; i < inputIds.length; i++) {
    values.push(+document.getElementById(inputIds[i]).value)
  }

  // Determines which formula (function) to call
  if (formula === "distpoints"){ 
    // indexing values array to provide the input for each function
    result.innerHTML = dist(values[0], values[1], values[2], values[3])

  } else if (formula === "slope"){
    result.innerHTML = slope(values[0], values[1], values[2], values[3])

  } else if (formula === "heron"){
    result.innerHTML = heron(values[0], values[1], values[2])

  } else if (formula === "traparea"){
    result.innerHTML = trapezoidArea(values[0], values[1], values[2])
  }
}

// following functions all return a number
function dist(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

function slope(x1, y1, x2, y2) {
  return (y2 - y1) / (x2 - x1);
}

function heron(a, b, c) {
  let s = (a + b + c) / 2;
  console.log(a,b,c)
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

function trapezoidArea(a, b, h) {
  return 0.5 * (a + b) * h;
}


// OTHER FUNCTIONS I CAN ADD 

// function midpoint(x1, y1, x2, y2) {
//   return [(x1 + x2) / 2, (y1 + y2) / 2];
// }

// function volumeCylinder(r, h) {
//   return Math.PI * h * r ** 2;
// }

// function surfaceAreaCylinder(r, h) {
//   return 2 * Math.PI * r ** 2 + 2 * Math.PI * r * h;
// }

// function compoundInterest(p, i, n) {
//   return p * (1 + i) ** n;
// }

// function celsiusToFahrenheit(ctemp) {
//   return (ctemp * 9) / 5 + 32;
// }

// function fahrenheitToCelsius(ftemp) {
//   return ((ftemp - 32) * 5) / 9;
// }

// function tip(billamount, percent) {
//   let tip = billamount * percent;
//   let GST = billamount * 0.05 + billamount;
//   let total = tip + GST + billamount;
//   return tip, GST, total;
// }

// function wage(hours, overtime, rate) {
//   return (hours + overtime) * rate;
// }

// function pythagorean(a, b) {
//   return Math.sqrt(a ** 2 + b ** 2);
// }
