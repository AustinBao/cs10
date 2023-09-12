// COIN FLIP SIMULATOR

let output1 = document.getElementById("output");

// EVENT LISTENER FOR BUTTON CLICK
document.getElementById("btn").addEventListener("click", randomGen);

function randomGen() {
  // GENERATE RANDOM NUM
  let randnumber = Math.random();
  console.log(randnumber);

  // SIMULATE COIN FLIP
  if (randnumber < 0.5) {
    output1.innerHTML = " <img src='img/heads.png' alt='tails'>";
  } else {
    output1.innerHTML = " <img src='img/tails.png' alt='tails'>";
  }
}
