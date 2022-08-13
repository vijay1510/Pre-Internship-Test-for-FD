import { data } from "./data.js";

/* Task 1*/
const form = document.querySelector("form");
const allInput = document.querySelectorAll("input");
const clear = document.querySelector(".cancel");
const inputToArray = Array.from(allInput);

clear.addEventListener("click", (e) => {
  e.preventDefault();
  allInput.forEach((e) => (e.value = ""));
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const startsWith = ["-", "_", "+"];
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const all = inputToArray.filter(
    (e) =>
      e.value.length < 5 ||
      startsWith.includes(e.value[0]) ||
      specialChars.test(e.value)
  );

  if (all.length > 0) {
    alert(
      "all input fields must follow these conditions : \n\na. Minimum length 5 \nb. No special characters \nc. Cannot start with '-', '_', '+' "
    );
  } else {
    alert("congrats!, form is successfully completed");
    allInput.forEach((e) => (e.value = ""));
  }
});

/* Task 1*/
/* --------------------------------------------------------------------------------------------------------------------------------------------------------- */

/* Task 2*/

let tableRow = document.querySelector("#table-row");

data.forEach((row) => {
  const tr = document.createElement("tr");
  row.forEach((cell) => {
    const td = document.createElement("td");
    td.textContent = cell;
    tr.appendChild(td);
  });
  tableRow.appendChild(tr);
});
