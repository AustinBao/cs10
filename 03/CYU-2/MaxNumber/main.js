// CS10 DETERMIN MAX NUMBER BY AUSTIN

// Button event listener
document.getElementById("maxbtn").addEventListener("click", determineMax);

function determineMax() {
  // Grabbing input
  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;
  let num3 = +document.getElementById("num3").value;

  // Determing which number is the greatest along with which input it came from
  if (num1 >= num2 && num1 >= num3) {
    document.getElementById("maxnumoutput").innerHTML =
      num1 + " (Input number 1)";
  } else if (num2 >= num1 && num2 >= num3) {
    document.getElementById("maxnumoutput").innerHTML =
      num2 + " (Input number 2)";
  } else {
    document.getElementById("maxnumoutput").innerHTML =
      num3 + " (Input number 3)";
  }
}
