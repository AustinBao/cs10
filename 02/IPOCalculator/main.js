// IPO CALC by Austin

let formula = document
  .getElementById("formula-select")
  .addEventListener("change", displayFormula);

let text = document.getElementById("name");

function displayFormula(event) {
  let formula = event.target.value;
  let text = document.getElementById("name");

  text.textContent = "Formula: " + formula;
}

// function dist(x1, y1, x2, y2) {
//   return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
// }

// function slope(x1, y1, x2, y2) {
//   return (y2 - y2) / (x2 - x1);
// }

// function dist(x1, y1, x2, y2) {
//   return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
// }

// function heron(a, b, c) {
//   let s = (a + b + c) / 2;
//   return Math.sqrt(s * (s - a) * (s - b) * (s - c));
// }

// function trapezoidArea(a, b, h) {
//   return 0.5 * (a + b) * h;
// }

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
