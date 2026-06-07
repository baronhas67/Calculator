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

const buttonsDiv = document.querySelector("#buttons-div");
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

// assing the correct variable when the button is clicked

buttonsDiv.addEventListener("click", (e) => {
const clickedBtn = e.target.id;

if (isFinite(clickedBtn)) {
    if (operator === 78) {
        num1 = arr[+clickedBtn];
    } else {
        num2 = arr[+clickedBtn];
    }
}

display.textContent = num1;
display.textContent += num2;
})



