// The Js behind Austin's Addition Calculator

// Button event listener
document.getElementById("calculate").addEventListener("click", calculateSum);

function calculateSum() {
  // Grabbing input
  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;

  // Processing (adding both numbers)
  let sum = num1 + num2;

  // Outputting sum
  document.getElementById("sum").innerHTML = sum;
}
