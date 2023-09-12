// CS10 NUMBER ANALYZER BY AUSTIN

// Button event listener
document.getElementById("analyzebtn").addEventListener("click", getNumberInfo);

function getNumberInfo() {
  // Grabbing input
  let number = +document.getElementById("number").value;

  // Processing & displaying it on html
  if (number % 2 === 0) {
    document.getElementById("evenodd").innerHTML = "Even";
  } else {
    document.getElementById("evenodd").innerHTML = "Odd";
  }

  if (number > 0) {
    document.getElementById("posnegzero").innerHTML = "Positive";
  } else if (number < 0) {
    document.getElementById("posnegzero").innerHTML = "Negative";
  } else {
    document.getElementById("posnegzero").innerHTML = "Zero";
  }
}
