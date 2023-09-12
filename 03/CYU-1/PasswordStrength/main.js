// CS10 PASSWORD STRENGTH BY AUSTIN

// Button event listener
document.getElementById("pwbtn").addEventListener("click", getPWStrength);

function getPWStrength() {
  // Grabbing input (pw = password)
  let pw = document.getElementById("pw").value;
  let pwlength = pw.length;

  // If statements to determine color based off of pw strength & displaying it on html
  if (pwlength >= 1 && pwlength <= 4) {
    document.getElementById("pw").style.border = "2px solid red";
    document.getElementById("output").innerHTML = "Weak";
    document.getElementById("output").style.color = "red";
  } else if (pwlength >= 5 && pwlength <= 8) {
    document.getElementById("pw").style.border = "2px solid orange";
    document.getElementById("output").innerHTML = "Okay";
    document.getElementById("output").style.color = "orange";
  } else if (pwlength >= 9 && pwlength <= 12) {
    document.getElementById("pw").style.border = "2px solid lime";
    document.getElementById("output").innerHTML = "Strong";
    document.getElementById("output").style.color = "lime";
  } else if (pwlength >= 13) {
    document.getElementById("pw").style.border = "2px solid green";
    document.getElementById("output").innerHTML = "Very Strong";
    document.getElementById("output").style.color = "green";
  } else {
    document.getElementById("pw").style.borderColor = "black";
    document.getElementById("output").innerHTML = "Please provide a password";
    document.getElementById("output").style.color = "black";
  }
}
