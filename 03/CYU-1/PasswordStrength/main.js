// CS10 PASSWORD STRENGTH BY AUSTIN

let text = document.getElementById("output");
let pwBorder = document.getElementById("pw");

// Button event listener
document.getElementById("pwbtn").addEventListener("click", getPWStrength);

function getPWStrength() {
  // Grabbing input (pw = password)
  let pw = document.getElementById("pw").value;
  let pwlength = pw.length;

  // If statements to determine color based off of pw strength & displaying it on html
  if (pwlength >= 1 && pwlength <= 4) {
    pwBorder.style.border = "2px solid red";
    text.innerHTML = "Weak";
    text.style.color = "red";
  } else if (pwlength >= 5 && pwlength <= 8) {
    pwBorder.style.border = "2px solid orange";
    text.innerHTML = "Okay";
    text.style.color = "orange";
  } else if (pwlength >= 9 && pwlength <= 12) {
    pwBorder.style.border = "2px solid lime";
    text.innerHTML = "Strong";
    text.style.color = "lime";
  } else if (pwlength >= 13) {
    pwBorder.style.border = "2px solid green";
    text.innerHTML = "Very Strong";
    text.style.color = "green";
  } else {
    pwBorder.style.borderColor = "black";
    text.innerHTML = "Please provide a password";
    text.style.color = "black";
  }
}
