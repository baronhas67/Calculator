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
let num1 = 0;
let num2 = 0;
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

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
            display.textContent += " + ";
            operator = "+";
        break;

        case "subtractB":
            display.textContent += " - ";
            operator = "-";
        break;

        case "multiplyB":
            display.textContent += " times ";
            operator = "*";
        break;

        case "divideB":
            display.textContent += " / ";
            operator = "/";
        break;

        case "clear":
            display.textContent = "";
            num1 = 0;
            num2 = 0;
            operator = 0;
        break;
    }
    console.log(operator);
})

calculateB.addEventListener("click", () => {
    num1 = +num1;
    num2 = +num2;
    console.log(typeof num1, typeof num2);

    const result = operate(num1, num2, operator); 
    num2 = 0;
    num1 = result;
    display.textContent = result;
})