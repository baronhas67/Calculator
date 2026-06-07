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
    a / b;
}

const numbersDiv = document.querySelector(".numbers-div");
const operatorsDiv = document.querySelector(".operators");
const display = document.querySelector("#display");

let operator = 78;
let num1;
let num2 = 0;
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function operate(a, b, op) {
    switch (op) {
        case "+":
            add(a, b);
        break;

        case "-":
            subtract(a, b);
        break;

        case "*":
            multiply(a, b);
        break;

        case "/":
            divide(a, b);
        break;
    }
}