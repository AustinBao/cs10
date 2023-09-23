//CS10 PASSWORD CHECKER BY AUSTIN

// Button event listener
document.getElementById("checkpw").addEventListener("click", passwordChecker);

function passwordChecker() {
  // Grabbing input (specifically integer input using +)
  let code1 = +document.getElementById("code1-in").value;
  let code2 = +document.getElementById("code2-in").value;
  let code3 = +document.getElementById("code3-in").value;

  // check password strength
  if (code3 > code1 && code3 > code2) {
    // change color depending on if it passes the strength test or not
    document.getElementById("status").style.backgroundColor = "green";
  } else {
    document.getElementById("status").style.backgroundColor = "red";
  }
}
