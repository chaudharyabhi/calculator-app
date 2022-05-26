let inputDiv = document.querySelector(".input");
let outputDiv = document.querySelector(".output");
let numbers = document.getElementsByClassName("number");

Array.from(numbers).forEach((element) => {
  element.addEventListener("click", (e) => {
    let num = e.target.innerText;
    if (inputDiv.innerText != 0) {
      inputDiv.innerText += num;
    } else inputDiv.innerText = num;
  });
});

let reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  inputDiv.innerText = "0";
  store = 0;
  outputDiv.innerText = "";
});

let store = 0;
let operator = "";

const operation = (sign) => {
  if (inputDiv.innerText != "0" || inputDiv.innerText == "") {
    outputDiv.innerText = sign;
    if (store == 0) {
      store += parseFloat(inputDiv.innerText);
    } else {
      if (store != parseFloat(inputDiv.innerText) && inputDiv.innerText != "") {
        store = parseFloat(inputDiv.innerText);
      }
    }
    inputDiv.innerText = "";
    operator = sign;
    console.log(operator);
  }
};

let add = document.querySelector(".add");
let subtract = document.querySelector(".subtract");
let multiply = document.querySelector(".multiply");
let divide = document.querySelector(".divide");
let percentage = document.querySelector(".percentage");

add.addEventListener("click", operation.bind(this, "+"));

subtract.addEventListener("click", operation.bind(this, "-"));

multiply.addEventListener("click", operation.bind(this, "*"));

divide.addEventListener("click", operation.bind(this, "/"));

percentage.addEventListener("click", function () {
  let percent = inputDiv.innerText;
  store = percent / 100;
  inputDiv.innerText = store;
  outputDiv.innerText = "";
});

let equals = document.querySelector("#equal");

equals.addEventListener("click", function () {
  let lastEntry = parseFloat(inputDiv.innerText);
  if (inputDiv.innerText == "") {
    return;
  } else if (operator == "+") {
    add.style.backgroundColor = "#FF9500";
    store += lastEntry;
  } else if (operator == "-") {
    subtract.style.backgroundColor = "#FF9500";
    store = store - lastEntry;
  } else if (operator == "*") {
    multiply.style.backgroundColor = "#FF9500";
    store = store * lastEntry;
  } else if (operator == "/") {
    divide.style.backgroundColor = "#FF9500";
    store = store / lastEntry;
  }
  inputDiv.innerText = store;
  operator = "";
  outputDiv.innerText = "";
});
