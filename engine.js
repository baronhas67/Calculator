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

let operator;
let num1;
let num2;

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