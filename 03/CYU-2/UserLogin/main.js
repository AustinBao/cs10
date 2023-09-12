// CS10 USER LOGIN BY AUSTIN

// Button event listener
document.getElementById("loginbtn").addEventListener("click", loginForm);

function loginForm() {
  // Grabbing input
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // Determing if user login is correct and outputting result
  if (username === "admin") {
    if (password === "1234") {
      document.getElementById("loginres").innerHTML = "Login Successful";
    } else {
      document.getElementById("loginres").innerHTML = "Invalid Password";
    }
  } else {
    document.getElementById("loginres").innerHTML = "Invalid Username";
  }
}
