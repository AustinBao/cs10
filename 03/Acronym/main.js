//CS10 ACRONYM LOOKUP BY AUSTIN

// Button event listener
document.getElementById("lookup").addEventListener("click", findAcronym);

function findAcronym() {
  // Grabbing acronym and making it case-insensitive.
  let acronym = document.getElementById("acronym").value.toLowerCase();

  // if statements for all the different acronyms.
  if (acronym === "lol") {
    document.getElementById("status").innerHTML = "Laugh Out Loud";
  } else if (acronym === "lmao") {
    document.getElementById("status").innerHTML = "Laugh My Ass Off";
  } else if (acronym === "fyi") {
    document.getElementById("status").innerHTML = "For Your Information";
  } else if (acronym === "tmi") {
    document.getElementById("status").innerHTML = "Too Much Information";
  } else if (acronym === "btw") {
    document.getElementById("status").innerHTML = "By The Way";
  } else if (acronym === "idk") {
    document.getElementById("status").innerHTML = "I Don't Know";
  } else if (acronym === "gl") {
    document.getElementById("status").innerHTML = "Good Luck";
  } else if (acronym === "gn") {
    document.getElementById("status").innerHTML = "Good Night";
  } else {
    document.getElementById(
      "status"
    ).innerHTML = `Sorry, I don't know the acronym: ${acronym}. Please try again!`;
  }
}
