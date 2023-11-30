//  Button event listeners
document.getElementById("menu").addEventListener("click", displayHeader);
document.getElementById("submit").addEventListener("click", changeMain);

// grab localstorage info and display it
document.getElementById("name").innerHTML = `, ${localStorage.getItem("name")}`;
document.getElementById("task").innerHTML = localStorage.getItem("task");

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

  // Displaying new names and task
  document.getElementById("name").innerHTML = `, ${name}`;
  document.getElementById("task").innerHTML = task;

  // changes background image
  let background = document.getElementById("backgroundImg").value;
  let html = document.documentElement;
  html.style.backgroundImage = `url(backgrounds/${background}.png)`;
  html.style.backgroundSize = "cover";
}
