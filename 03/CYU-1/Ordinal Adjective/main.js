// CS10 GRADE CALC BY AUSTIN

// Button event listener
document.getElementById("checkord").addEventListener("click", getOrdinal);

function getOrdinal() {
  // Grabbing input (pw = password)
  let number = +document.getElementById("ord-in").value;

  // If statements to determine color based off of pw strength & displaying it on html
  if (number === 1) {
    document.getElementById("output").innerHTML = "1st";
  } else if (number === 2) {
    document.getElementById("output").innerHTML = "2nd";
  } else if (number === 3) {
    document.getElementById("output").innerHTML = "3rd";
  } else if (number > 9 || number < 1) {
    document.getElementById("output").innerHTML =
      "Please input a number between 1 and 9";
  } else {
    document.getElementById("output").innerHTML = number + "th";
  }
}
