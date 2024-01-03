//  Button event listeners
document.getElementById("menu").addEventListener("click", displayHeader);
document.getElementById("submit").addEventListener("click", changeMain);
document.getElementById("randQuote").addEventListener("click", randQuote);

// grab localstorage info and display it
document.getElementById("name").innerHTML = `, ${localStorage.getItem("name")}`;
document.getElementById("task").innerHTML = localStorage.getItem("task");
let html = document.documentElement;
html.style.backgroundImage = `url(backgrounds/${localStorage.getItem("background")}.png)`;
html.style.backgroundSize = "cover";
randQuote()


function randQuote(){
  let quotes =[
    `"The only way to do great work is to love what you do." - Steve Jobs`,
    `"In the middle of difficulty lies opportunity." - Albert Einstein`,
    `"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt`,
    `"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill`,
    `"The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt`,
    `"Happiness is not something ready-made. It comes from your own actions." - Dalai Lama`,
    `"The best way to predict the future is to invent it." - Alan Kay`,
    `"Be the change that you wish to see in the world." - Mahatma Gandhi`,
    `"The greatest glory in living lies not in never falling, but in rising every time we fall." - Nelson Mandela`,
    `"Believe you can and you're halfway there." - Theodore Roosevelt`]

  let randnum = Math.floor(Math.random() * 10);
  document.getElementById("quote").innerHTML = `${quotes[randnum]}`
}

function displayHeader() {
  // have header appear if the display is none, else set equal to block
  let header = document.getElementById("head");
  if (header.style.display === "none") {
    header.style.display = "block";
  } else {
    header.style.display = "none";
  }
}

function changeMain() {
  // grabbing input and saving values to local storage
  let name = document.getElementById("nameIn").value;
  localStorage.setItem("name", name);
  let task = document.getElementById("taskIn").value;
  localStorage.setItem("task", task);
  let background = document.getElementById("backgroundImg").value;
  localStorage.setItem("background", background);

  // Displaying new names and task. Also changes background image
  document.getElementById("name").innerHTML = `, ${name}`;
  document.getElementById("task").innerHTML = task;

  html.style.backgroundImage = `url(backgrounds/${background}.png)`;
  html.style.backgroundSize = "cover";
}
