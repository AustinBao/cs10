// COIN FLIP SIMULATOR

let output1 = document.getElementById("output");
let headsoutput = document.getElementById("headsout");
let tailsoutput = document.getElementById("tailsout");

let numofheads = 0;
let numoftails = 0;

// EVENT LISTENER FOR BUTTON CLICK
document.getElementById("btn").addEventListener("click", randomGen);

function randomGen() {
  // GENERATE RANDOM NUM
  let randnumber = Math.random();
  console.log(randnumber);

  // SIMULATE COIN FLIP
  if (randnumber < 0.5) {
    // Heads
    numofheads++;
    output1.innerHTML = " <img src='img/heads.png' alt='heads'>";
    headsoutput.innerHTML = numofheads;
  } else {
    // Tails
    numoftails++;
    output1.innerHTML = " <img src='img/tails.png' alt='tails'>";
    tailsoutput.innerHTML = numoftails;
  }
}
