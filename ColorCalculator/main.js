// BRIGHTNESS IPO CALC BY AUSTIN

// Button event listener
document
  .getElementById("calculate")
  .addEventListener("click", calculateBrightness);

function calculateBrightness() {
  // Grabbing input (RGB)
  let red = +document.getElementById("r-in").value;
  let green = +document.getElementById("g-in").value;
  let blue = +document.getElementById("b-in").value;

  // Processing (finding brightness)
  let brightness = Math.sqrt(
    0.299 * red ** 2 + 0.587 * green ** 2 + 0.114 * blue ** 2
  );

  //   Could have also done used this if we didnt use span and instead used a HTML paragraph
  //   let msg = `Luminance = ${brightness}`;

  // Output
  document.getElementById("output").innerHTML = Math.round(brightness);
}
