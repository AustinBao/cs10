// CS10 PIZZA ORDER BY AUSTIN BAO

// WAIT FOR BUTTON CLICK
document.getElementById("orderpizza").addEventListener("click", revealOrder);

function revealOrder() {
  // INPUT
  let size = document.getElementById("size").value;
  let topping1 = document.getElementById("topping1").value;
  let topping2 = document.getElementById("topping2").value;

  // OUTPUT PERSONAL MSG
  let msg = `You ordered a ${size} pizza with ${topping1} and ${topping2}`;
  document.getElementById("msg").innerHTML = msg;
}
