// Button event listener
document
  .getElementById("search-btn")
  .addEventListener("click", kungfuCharacter);

function kungfuCharacter() {
  // Grabbing input from search bar
  let name = document.getElementById("search-in").value.toLowerCase();

  // check password
  if (name === "po" || name === "dragon warrior") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="images/po.png" alt="Po" />
    <h2>Po</h2>
    <p class="quote">Buddy, I am the Dragon Warrior.</p>`;
  } else if (name === "mantis" || name === "master mantis") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="images/mantis.png" alt="Mantis" />
    <h2>Mantis</h2>
    <p class="quote">Fear the bug!</p>`;
  } else if (name === "monkey") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="images/monkey.png" alt="Monkey" />
    <h2>Monkey</h2>
    <p class="quote">We should hang out!</p>`;
  } else if (name === "crane") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="images/crane.png" alt="Crane" />
    <h2>Crane</h2>
    <p class="quote">You can chain my body, but you will never chain my warrior spirit!</p>`;
  } else if (name === "tigress") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="images/tigress.png" alt="Tigress" />
    <h2>Tigress</h2>
    <p class="quote">That was pretty hardcore!</p>`;
  } else if (name === "viper") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="images/viper.png" alt="Viper" />
    <h2>Viper</h2>
    <p class="quote">I don't need to bite to fight!</p>`;
  } else {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="images/question-mark.png" alt="kung fu panda character" />
    <h2>?????</h2>
    <p class="quote">----------</p>`;
  }
}
