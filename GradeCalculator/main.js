// CS10 GRADE CALC BY AUSTIN

// Button event listener
document.getElementById("calculate").addEventListener("click", calculateGrade);

function calculateGrade() {
  // Grabbing input
  let css1 = +document.getElementById("css1").value;
  // css1 = client side scripting 1
  let css2 = +document.getElementById("css2").value;
  // css2 = client side scripting 2
  let sp1 = +document.getElementById("sp1").value;
  // sp1 = structured programming 1
  let sp2 = +document.getElementById("sp2").value;
  // sp2 = structured programming 2
  let pA = +document.getElementById("pA").value;
  // PA = project A

  // Processing (getting sum then divide by 5 to find average)
  let average = (css1 + css2 + sp1 + sp2 + pA) / 5;

  // Output
  document.getElementById("output").innerHTML = Math.round(average);
}
