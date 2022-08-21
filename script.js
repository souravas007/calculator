"use strict";

let runningTotal = 0;
let buffer = "0";
let previousOperator;
function init() {
  document.querySelectorAll(".button").forEach((e) =>
    e.addEventListener("click", function (event) {
      buttonClick(event.target.innerText);
    })
  );
}
function buttonClick(text) {
  if (text === "C") {
    runningTotal = 0;
    buffer = "0";
  } else if (text === "%" || text === "*" || text === "-" || text === "+") {
    if (previousOperator === "+") {
      runningTotal = runningTotal + Number(buffer);
    } else if (previousOperator === "-") {
      runningTotal = runningTotal - Number(buffer);
    } else if (previousOperator === "/") {
      runningTotal = runningTotal / Number(buffer);
    } else if (previousOperator === "*") {
      runningTotal = runningTotal * Number(buffer);
    } else {
      previousOperator = text;
      runningTotal = Number(buffer);
    }
    previousOperator = text;
    buffer = "0";
  } else if (text === "=") {
    if (previousOperator === "+") {
      runningTotal = runningTotal + Number(buffer);
    } else if (previousOperator === "-") {
      runningTotal = runningTotal - Number(buffer);
    } else if (previousOperator === "/") {
      runningTotal = runningTotal / Number(buffer);
    } else if (previousOperator === "*") {
      runningTotal = runningTotal * Number(buffer);
    }
    document.querySelector(".result").innerText = runningTotal;
  } else {
    if (buffer === "0") {
      buffer = text;
    } else {
      buffer += text;
    }
  }
  console.log("Running Total: " + runningTotal);
  rerender();
}

function rerender() {
  document.querySelector(".result").innerText = buffer;
}
init();
