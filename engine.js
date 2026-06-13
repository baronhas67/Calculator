function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

const numbersDiv = document.querySelector(".numbers-div");
const operatorsDiv = document.querySelector(".operators");
const display = document.querySelector("#display");
const calculateB = document.querySelector("#calc");

let operator = 0;
let num1 = "";
let num2 = "";
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let isClear = false;

function operate(a, b, op) {
    switch (op) {
        case "+":
           return add(a, b);
        break;

        case "-":
           return subtract(a, b);
        break;

        case "*":
           return multiply(a, b);
        break;

        case "/":
           return divide(a, b);
        break;
    }
}

numbersDiv.addEventListener("click", (e) => {
    const number = e.target.id;

    if (isClear === true) {
        display.textContent = "";
        num1 = "";
        num2 = "";
        operator = 0;
        isClear = false;
    }

    if (operator === 0) {
        display.textContent += number;
        num1 += number;
        console.log("num1: " + num1);
    } else {
    display.textContent += number;
    num2 += number;
    console.log("two: " + num2);
    }
})

operatorsDiv.addEventListener("click", (e) => {
    switch (e.target.id) {
        case "addB":
            if (!(operator == 0)) calculateF();
            display.textContent += " + ";
            operator = "+";
        break;

        case "subtractB":
            if (!(operator == 0)) calculateF();
            display.textContent += " - ";
            operator = "-";
        break;

        case "multiplyB":
            if (!(operator == 0)) calculateF();
            display.textContent += " times ";
            operator = "*";
        break;

        case "divideB":
            if (!(operator == 0)) calculateF();
            display.textContent += " / ";
            operator = "/";
        break;

        case "clear":
            display.textContent = "";
            num1 = 0;
            num2 = 0;
            status.key = "CH";
        break;
    }
    console.log(operator);
})

function calculateF() {
    if (num1 !== "" && +num2 === 0 && operator === "/") {
        display.textContent = "Math Error";
    } else {

    num1 = +num1;
    num2 = +num2;
    console.log(typeof num1, typeof num2);

    const result = operate(num1, num2, operator); 
    num2 = "";
    num1 = result;
    operator = 0;
    display.textContent = result;
    }
}

calculateB.addEventListener("click", calculateF);
calculateB.addEventListener("click", () => isClear = true);