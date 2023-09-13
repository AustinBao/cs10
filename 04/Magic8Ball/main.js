// CS10 MAGIC8BALL BY AUSTIN

// Button event listener
document.getElementById("submitbtn").addEventListener("click", magic8Ball);

let result = document.getElementById("result");

function magic8Ball() {
  let randnum = Math.random();

  if (randnum < 0.2) {
    result.innerHTML = "Without a Doubt.";
    result.style.color = "green";
  } else if (randnum < 0.4) {
    result.innerHTML = "As I see it, yes.";
    result.style.color = "green";
  } else if (randnum < 0.6) {
    result.innerHTML = "Concentrate and ask again.";
    result.style.color = "black";
  } else if (randnum < 0.8) {
    result.innerHTML = "Don't count on it.";
    result.style.color = "red";
  } else {
    result.innerHTML = "Outlook not so good.";
    result.style.color = "red";
  }
}
