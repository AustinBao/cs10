// CS10 QUIZ BY AUSTIN

// Button event listener
document.getElementById("submit").addEventListener("click", quizResults);

function quizResults() {
  let google = document.getElementById("google").value.toLowerCase();
  let pin = document.getElementById("pin").value.toLowerCase();
  let cookie = document.getElementById("cookie").value.toLowerCase();
  let wirelessfidelity = document
    .getElementById("wirelessfidelity")
    .value.toLowerCase();
  let android = document.getElementById("android").value.toLowerCase();
  let faang = document.getElementById("faang").value.toLowerCase();
  let leagueoflegends = document
    .getElementById("leagueoflegends")
    .value.toLowerCase();

  let score = 0;

  if (google === "google") {
    score++;
    document.getElementById("google").style.outline = "2px solid green";
  } else {
    document.getElementById("google").style.outline = "2px solid red";
  }
  if (pin === "personal identification number") {
    score++;
    document.getElementById("pin").style.outline = "2px solid green";
  } else {
    document.getElementById("pin").style.outline = "2px solid red";
  }
  if (cookie === "cookie") {
    score++;
    document.getElementById("cookie").style.outline = "2px solid green";
  } else {
    document.getElementById("cookie").style.outline = "2px solid red";
  }
  if (wirelessfidelity === "wireless fidelity") {
    score++;
    document.getElementById("wirelessfidelity").style.outline =
      "2px solid green";
  } else {
    document.getElementById("wirelessfidelity").style.outline = "2px solid red";
  }
  if (android === "android") {
    score++;
    document.getElementById("android").style.outline = "2px solid green";
  } else {
    document.getElementById("android").style.outline = "2px solid red";
  }
  if (
    faang === "facebook" ||
    faang === "apple" ||
    faang === "amazon" ||
    faang === "netflix" ||
    faang === "google"
  ) {
    score++;
    document.getElementById("faang").style.outline = "2px solid green";
  } else {
    document.getElementById("faang").style.outline = "2px solid red";
  }
  if (leagueoflegends === "league of legends") {
    score++;
    document.getElementById("leagueoflegends").style.outline =
      "2px solid green";
  } else {
    document.getElementById("leagueoflegends").style.outline = "2px solid red";
  }

  let percent = Math.round((score / 7) * 100);

  document.getElementById("result").innerHTML = `${score}/7 or ${percent}%`;

  if (score >= 6) {
    document.getElementById("encourage").innerHTML = "Very well done!";
    document.getElementById("encourage").style.color = "green";
  } else if (score >= 4) {
    document.getElementById("encourage").innerHTML = "Not bad!";
    document.getElementById("encourage").style.color = "lime";
  } else if (score >= 2) {
    document.getElementById("encourage").innerHTML = "Keep trying!";
    document.getElementById("encourage").style.color = "orange";
  } else {
    document.getElementById("encourage").innerHTML = "You need to study more!";
    document.getElementById("encourage").style.color = "red";
  }
}
