let inputDiv = document.querySelector(".input");
let numbers = document.getElementsByClassName("number");

Array.from(numbers).forEach(element => {
    element.addEventListener('click', (e) => {
        let num = e.target.innerText;
        if (inputDiv.innerText != 0) {
            inputDiv.innerText += num;
        }
        else inputDiv.innerText = num;            
     })
})

let reset = document.querySelector("#reset");
reset.addEventListener('click', () => {
    inputDiv.innerText = '0';
    store = 0;
})


let store = 0;
let operator = '';

const operation = (sign,clickedElement) => {
    if (inputDiv.innerText != '') {
        clickedElement.style.backgroundColor = "#D4D4D2";
        if (store == 0) {
            store += parseFloat(inputDiv.innerText);
            inputDiv.innerText = "";
            console.log(store);
        }
        else {
            store = parseFloat(inputDiv.innerText);
            inputDiv.innerText = "";
            console.log(store);
        }
        operator = sign;
    }
}

let add = document.querySelector(".add");
let subtract = document.querySelector(".subtract");
let multiply = document.querySelector(".multiply");
let divide = document.querySelector(".divide");
let percentage = document.querySelector(".percentage");


add.addEventListener('click', operation.bind(this, "+", add));

subtract.addEventListener('click', operation.bind(this, "-", subtract));

multiply.addEventListener('click', operation.bind(this, "*", multiply));

divide.addEventListener('click', operation.bind(this, "/", divide));

percentage.addEventListener('click', function () {
    store = store / 100;
    inputDiv.innerText = store;
});


// needs further enhancements
let equals = document.querySelector("#equal");

equals.addEventListener('click', function () {
    let lastEntry = parseFloat(inputDiv.innerText);
    if (inputDiv.innerText == "") {
        return;
    }
    else if (lastEntry == store) {
        store = lastEntry;
        // this needs a function here
    }
    else if (operator == "+") {
        add.style.backgroundColor = "#FF9500";
        store += lastEntry;
        inputDiv.innerText = store;
    }
    else if (operator == "-") {
        subtract.style.backgroundColor = "#FF9500";
        store = store - lastEntry;
        inputDiv.innerText = store;
    }
    else if (operator == "*") {
        multiply.style.backgroundColor = "#FF9500";
        store = store * lastEntry;
        inputDiv.innerText = store;
    }
    else if (operator == "/") {
        divide.style.backgroundColor = "#FF9500";
        store = store / lastEntry;
        inputDiv.innerText = store;
    }
})

