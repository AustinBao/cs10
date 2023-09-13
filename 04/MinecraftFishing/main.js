// Functionize Minecraft Fishing Start Code BY AUSTIN BAO

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

// VARIABLES FOR LATER IF STATEMENTS
let numPufferSpan = document.getElementById("num-puffer");
let numCodSpan = document.getElementById("num-cod");
let numSalmonSpan = document.getElementById("num-salmon");
let numTropicalSpan = document.getElementById("num-tropical");

let numPuffer = 0;
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;

let fishimg = document.getElementById("result-img");

function fishBtnClicked() {
  // GET CHARACTER SELECTED
  let character = document.getElementById("character-select").value;

  // GIVES RANDNUM
  let randnum = Math.random();

  // DETERMINE WHICH CHARACTER THEY SELECT AND HAVE PROBABILITY FOR FISH. CHANGES IMG AND NUMBER OF FISH

  // STEVE
  if (character === "steve") {
    if (randnum < 0.7) {
      fishimg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
    } else if (randnum < 0.9) {
      fishimg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
    } else if (randnum < 0.95) {
      fishimg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
    } else {
      fishimg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
    }
    // ALEX
  } else if (character === "alex") {
    if (randnum < 0.1) {
      fishimg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
    } else if (randnum < 0.2) {
      fishimg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
    } else if (randnum < 0.5) {
      fishimg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
    } else {
      fishimg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
    }
    // VILLAGER
  } else {
    if (randnum < 0.25) {
      fishimg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
    } else if (randnum < 0.5) {
      fishimg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
    } else if (randnum < 0.75) {
      fishimg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
    } else {
      fishimg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
    }
  }
}
