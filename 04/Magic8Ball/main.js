// CS10 MAGIC8BALL BY AUSTIN

// Button event listener
document.getElementById("submitbtn").addEventListener("click", magic8Ball);

let result = document.getElementById("result");

function magic8Ball() {
  let randnum = Math.random();
  // MADE IT CASE INSENSITIVE
  let question = document.getElementById("question").value.toLowerCase();

  // SPECIFIC QUESTION. RETURN SO THE OTHER IF STATEMENTS DONT RUN
  if (question === "is harry ainlay the best school?") {
    result.innerHTML = "Obviously Harry Ainlay School is the best!";
    result.style.color = "blue";
    return;
  }
  if (question === "is computer science cool?") {
    result.innerHTML = "Of course it is";
    result.style.color = "yellow";
    return;
  }
  if (question === "is water good for you?") {
    result.innerHTML = "You need water to survive so yeah";
    result.style.color = "orange";
    return;
  }

  // CHECKS IF THE INPUT IS EMPTY
  if (question.length === 0) {
    result.innerHTML = "Please ask a question...";
    result.style.color = "black";
  } else {
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
}
