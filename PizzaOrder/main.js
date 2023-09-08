document.getElementById("orderpizza").addEventListener("click", revealOrder);

function revealOrder() {
  let size = document.getElementById("size").value;
  let topping1 = document.getElementById("topping1").value;
  let topping2 = document.getElementById("topping2").value;

  let msg = `You ordered a ${size} pizza with ${topping1} and ${topping2}`;
  document.getElementById("msg").innerHTML = msg;
}
