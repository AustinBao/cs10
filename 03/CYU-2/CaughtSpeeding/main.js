// CS10 CAUGHT SPEEDING BY AUSTIN

// Button event listener
document.getElementById("ticketbtn").addEventListener("click", determineTicket);

function determineTicket() {
  // Grabbing input
  let driverspeed = +document.getElementById("driverspeed").value;
  let speedlimit = +document.getElementById("speedlimit").value;

  // Determing ticket size and display
  if (driverspeed >= speedlimit + 20) {
    document.getElementById("resultticket").innerHTML = "BIG TICKET";
  } else if (driverspeed <= speedlimit + 20 && driverspeed > speedlimit) {
    document.getElementById("resultticket").innerHTML = "SMALL TICKET";
  } else {
    document.getElementById("resultticket").innerHTML = "NO TICKET";
  }
}
