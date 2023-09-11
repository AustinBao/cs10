// The Js behind Austin's MadLib creator

// Button event listener
document.getElementById("finish").addEventListener("click", revealMadlib);

function revealMadlib() {
  // Grabbing input
  let noun1 = document.getElementById("noun1").value;
  let verb = document.getElementById("verb").value;
  let noun2 = document.getElementById("noun2").value;
  let adjective = document.getElementById("adj").value;

  // Processing input
  let madlib = `${noun1} quickly ${verb} into the convertible ${noun2} and drove off with their ${adjective} dog.`;

  // Outputting MadLib
  document.getElementById("madlib").innerHTML = madlib;
}
