//Password Checker BY AUSTIN

// Button event listener
document.getElementById("checkpw").addEventListener("click", passwordChecker);

function passwordChecker() {
  // Grabbing input
  let code1 = +document.getElementById("code1-in").value;
  let code2 = +document.getElementById("code2-in").value;
  let code3 = +document.getElementById("code3-in").value;

  // check password
  if (code3 > code1 && code3 > code2) {
    // chenge color
    document.getElementById("status").style.backgroundColor = "green";
  } else {
    document.getElementById("status").style.backgroundColor = "red";
  }
}
