const del = document.getElementById("AC");
const symbol = document.getElementById("symbol");
const percent = document.getElementById("percent");
const divide = document.getElementById("divide");

const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const multiply = document.getElementById("multiply");

const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const minus = document.getElementById("minus");

const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const plus = document.getElementById("plus");

const cero = document.getElementById("ceroButton");
const equal = document.getElementById("equal");

const numButton = document.querySelectorAll(".numBtn");
const numInput = document.getElementById("input");
const button = document.querySelectorAll('button');

let firstValue;
let operator;

button.forEach(function(button) {
    button.addEventListener('click', function() {
        button.classList.add('flash-animation');
    
        setTimeout(function() {
            button.classList.remove('flash-animation');
        }, 200);
    });
});


numButton.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        let getSymbol = event.target.innerHTML;
        numInput.value += getSymbol;
    });
});

divide.addEventListener("click", () => {
    firstValue = parseFloat(numInput.value);
    operator = "/";
    numInput.value = ""; 
});

multiply.addEventListener("click", () => {
    firstValue = parseFloat(numInput.value);
    operator = "*";
    numInput.value = ""; 
});

plus.addEventListener("click", () => {
    firstValue = parseFloat(numInput.value);
    operator = "+";
    numInput.value = ""; 
});

minus.addEventListener("click", () => {
    firstValue = parseFloat(numInput.value);
    operator = "-";
    numInput.value = ""; 
});

percent.addEventListener("click", () => {
    firstValue = parseFloat(numInput.value);
    operator = "%";
    numInput.value = ""; 
});

symbol.addEventListener("click", () => {
    let firstValue = parseFloat(numInput.value);
    numInput.value = -firstValue;
});

equal.addEventListener("click", () => {
    let secondValue = parseFloat(numInput.value);
    let result;

    if (operator === "/") {
        if (secondValue === 0) {
        alert("Error: Division by zero");
        } else {
        result = firstValue / secondValue;
        }
    } else if (operator === "*") {
        result = firstValue * secondValue;
    } else if (operator === "+") {
        result = firstValue + secondValue;
    } else if (operator === "-") {
        result = firstValue - secondValue;
    } else if (operator === "%") {
        result = firstValue % secondValue;
    } 

    numInput.value = result;
});



