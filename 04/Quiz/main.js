// CS10 QUIZ BY AUSTIN

// Button event listener
document.getElementById("submit").addEventListener("click", quizResults);

document.getElementById("showanswers").addEventListener("click", displayAnswer);

document.getElementById("hideanswers").addEventListener("click", removeAnswer);

function quizResults() {
  let google = document.getElementById("google");
  let pin = document.getElementById("pin");
  let cookie = document.getElementById("cookie");
  let wirelessfidelity = document.getElementById("wirelessfidelity");
  let android = document.getElementById("android");
  let faang = document.getElementById("faang");
  let firstcode = document.getElementById("firstcode");
  let oak = document.getElementById("oak");
  let leagueoflegends = document.getElementById("leagueoflegends");

  let score = 0;

  if (google.value.toLowerCase() === "google") {
    score++;
    google.style.outline = "2px solid green";
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

  if (leagueoflegends.value.toLowerCase() === "league of legends") {
    score++;
    leagueoflegends.style.outline = "2px solid green";
  } else {
    leagueoflegends.style.outline = "2px solid red";
  }

  let percent = Math.round((score / 9) * 100);

  document.getElementById("result").innerHTML = `${score}/9 or ${percent}%`;

  let encourage = document.getElementById("encourage");
  if (score >= 9) {
    encourage.innerHTML = "Aced!";
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
    encourage.style.color = "red";
  }
}

function displayAnswer() {
  document.getElementById("googleAnswer").innerHTML = "*Google";
  document.getElementById("pinAnswer").innerHTML =
    "*Personal Identification Number";
  document.getElementById("cookieAnswer").innerHTML = "*Cookie";
  document.getElementById("wifiAnswer").innerHTML = "*Wireless fidelity";
  document.getElementById("androidAnswer").innerHTML = "*Android";
  document.getElementById("faangAnswer").innerHTML =
    "*Facebook, Apple, Amazon, Netflix, or Google";
  document.getElementById("firstcode").innerHTML = "*Fortran";
  document.getElementById("oak").innerHTML = "*Oak";

  document.getElementById("leagueAnswer").innerHTML = "*League of Legends";
}

function removeAnswer() {
  document.getElementById("googleAnswer").innerHTML = "";
  document.getElementById("pinAnswer").innerHTML = "";
  document.getElementById("cookieAnswer").innerHTML = "";
  document.getElementById("wifiAnswer").innerHTML = "";
  document.getElementById("androidAnswer").innerHTML = "";
  document.getElementById("faangAnswer").innerHTML = "";
  document.getElementById("firstcode").innerHTML = "";
  document.getElementById("oak").innerHTML = "";
  document.getElementById("leagueAnswer").innerHTML = "";
}
