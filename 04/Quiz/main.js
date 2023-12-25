// CS10 QUIZ BY AUSTIN

// Button event listener
document.getElementById("submit").addEventListener("click", quizResults);

function quizResults() {
  // Set variables to elements so I save space and write less
  let google = document.getElementById("google");
  let pin = document.getElementById("pin");
  let cookie = document.getElementById("cookie");
  let wirelessfidelity = document.getElementById("wirelessfidelity");
  let android = document.getElementById("android");
  let faang = document.getElementById("faang");
  let firstcode = document.getElementById("firstcode");
  let oak = document.getElementById("oak");
  let montypython = document.getElementById("montypython");
  let leagueoflegends = document.getElementById("leagueoflegends");

  // Keeps track of score. Starts at zero 
  let score = 0;

  // if input is equal to expected value, add 1 to the score and make input border green
  if (google.value.toLowerCase() === "google") {
    score++;
    google.style.outline = "2px solid green";
    // else, make the border red since user got it wrong
  } else {
    google.style.outline = "2px solid red";
  }

  if (pin.value.toLowerCase() === "personal identification number") {
    score++;
    pin.style.outline = "2px solid green";
  } else {
    pin.style.outline = "2px solid red";
  }

  if (cookie.value.toLowerCase() === "cookie") {
    score++;
    cookie.style.outline = "2px solid green";
  } else {
    cookie.style.outline = "2px solid red";
  }

  if (wirelessfidelity.value.toLowerCase() === "wireless fidelity") {
    score++;
    wirelessfidelity.style.outline = "2px solid green";
  } else {
    wirelessfidelity.style.outline = "2px solid red";
  }

  if (android.value.toLowerCase() === "android") {
    score++;
    android.style.outline = "2px solid green";
  } else {
    android.style.outline = "2px solid red";
  }

  //  Accepts multiple answers as valid
  if (
    faang.value.toLowerCase() === "facebook" ||
    faang.value.toLowerCase() === "apple" ||
    faang.value.toLowerCase() === "amazon" ||
    faang.value.toLowerCase() === "netflix" ||
    faang.value.toLowerCase() === "google"
  ) {
    score++;
    faang.style.outline = "2px solid green";
  } else {
    faang.style.outline = "2px solid red";
  }

  if (firstcode.value.toLowerCase() === "fortran") {
    score++;
    firstcode.style.outline = "2px solid green";
  } else {
    firstcode.style.outline = "2px solid red";
  }

  if (oak.value.toLowerCase() === "oak") {
    score++;
    oak.style.outline = "2px solid green";
  } else {
    oak.style.outline = "2px solid red";
  }

  if (montypython.value.toLowerCase() === "monty python") {
    score++;
    montypython.style.outline = "2px solid green";
  } else {
    montypython.style.outline = "2px solid red";
  }

  if (leagueoflegends.value.toLowerCase() === "league of legends") {
    score++;
    leagueoflegends.style.outline = "2px solid green";
  } else {
    leagueoflegends.style.outline = "2px solid red";
  }

  // calculate percentage by dividing score by total and multiplying by 100
  let percent = Math.round((score / 10) * 100);

  // Displays result in rational and percent form
  document.getElementById("result").innerHTML = `${score}/10 or ${percent}%`;

  // Words of encouragement are selected based off of users score on the quiz. Color changes in correlation to how well they did
  let encourage = document.getElementById("encourage");
  if (score >= 9) {
    encourage.innerHTML = "Aced!";
    // green color means good score
    encourage.style.color = "green";
  } else if (score >= 7) {
    encourage.innerHTML = "Very well done!";
    encourage.style.color = "green";
  } else if (score >= 5) {
    encourage.innerHTML = "Not bad!";
    encourage.style.color = "lime";
  } else if (score >= 3) {
    encourage.innerHTML = "Keep trying!";
    encourage.style.color = "orange";
  } else {
    encourage.innerHTML = "You need to study more!";
    // red means bad score
    encourage.style.color = "red";
  }
}
