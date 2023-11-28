"use strict";
console.log("local.js file was loaded");

//inpute gautus skaicius sudeti ir paspaudus submit h2 atspauzdinti gauta rezultata
document.getElementById("btn1").addEventListener("click", sudeti);
document.getElementById("btn2").addEventListener("click", atimti);

function sudeti() {
  calculateResult("+");
}

function atimti() {
  calculateResult("-");
}

function calculateResult(operation) {
  // Get the values from the input fields
  const sk1 = document.getElementById("sk1").value;
  const sk2 = document.getElementById("sk2").value;

  // Convert the values to numbers and calculate the result based on the operation
  let result;
  if (operation === "+") {
    result = parseFloat(sk1) + parseFloat(sk2);
  } else if (operation === "-") {
    result = parseFloat(sk1) - parseFloat(sk2);
  }

  // Add the result and calculation to the <ul> element
  const rezultsList = document.getElementById("rezults");
  const li = document.createElement("li");
  li.textContent = `${sk1} ${operation} ${sk2} = ${result}`;
  rezultsList.appendChild(li);

  // Optional: Clear input fields after calculation
  document.getElementById("sk1").value = "";
  document.getElementById("sk2").value = "";
}

// sudeti();
// atimti();

// const els = {
//   dorm: document.forms[0],
//   sk1El: document.getElementById("sk1"),
//   sk2El: document.getElementById("sk2"),
//   rez: document.getElementById("formRez"),
//   historyListEl: document.getElementById("rezults"),
// };

// console.log("els ===", els);

// els.form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log("pateikta");
//   const sk1 = el.sk1El.valueAsNumber;
//   const sk2 = el.sk1El.valueAsNumber;
//   console.log(" sk1  ===", sk1);
//   console.log("sk2 ===", sk2);
//   const suma = sk1 + sk2;
//   console.log("suma ===", suma);
//   els.rez.textContent = suma;
// });
