const screen = document.querySelector('.screen');

const outputScreen = document.getElementById('output');
const inputScreen = document.getElementById('input');
const operatorscreen = document.getElementById('operator');

const keyboard = document.querySelector('.keyboard');

const figures = keyboard.querySelectorAll('.figure');
const operators = keyboard.querySelectorAll('.operator');

const result = keyboard.querySelector('.equal');

const reset = keyboard.querySelector('.reset');


let firstNumber = '';
let secondNumber = '';
let firstOperator = '';
let seconeOperator = '';
let equal = '';
let xNumber = '';
let yNumber = '';

let sum = 0;

function showFirstInput() {
    if (firstOperator == '') {
        firstNumber += this.dataset.button;
        inputScreen.textContent = '';
        inputScreen.textContent = firstNumber;
        console.log(firstNumber);
    } else {
        xNumber = +firstNumber;
        return xNumber;
    }
}

function showOperator() {
    firstOperator += this.dataset.operator;
    operatorscreen.textContent = '';
    operatorscreen.textContent = firstOperator;
    console.log(firstOperator);
    xNumber = firstNumber;
    figures.forEach(button => button.addEventListener('click', showSecondInput));
}

function showSecondInput() {
    if (equal ==  '') {
        secondNumber += this.dataset.button;
        inputScreen.textContent = '';
        inputScreen.textContent = secondNumber;
        console.log(secondNumber);
    }  else {
        yNumber = +secondNumber;
        return secondNumber;
    }
}

function calculate() {
    console.log('x: ' + xNumber);
    console.log('y: ' + yNumber);
    equal += '=';
    showSecondInput();

    if (firstOperator == '÷') {
        sum = +xNumber / +yNumber;
    } else if (firstOperator == 'x') {
        sum = +xNumber * +yNumber;
    } else if (firstOperator == '-') {
        sum = +xNumber - +yNumber;
    } else if (firstOperator == '+') {
        sum = +xNumber + +yNumber;
    } else if (firstOperator == 'mod') {
        sum = +xNumber % +yNumber;
    } else if (firstOperator == '%') {
        sum = +xNumber * +yNumber / 100;
    } else if (firstOperator == 'pow') {
        sum = Math.pow(+xNumber, +yNumber);
    } else if (firstOperator == 'root') {
        sum = Math.pow(+xNumber, 1 / +yNumber);
    }

    console.log(typeof sum + sum);
    outputScreen.textContent = '';
    outputScreen.textContent = sum.toFixed(2).toString();
}

function reseting() {
    location.reload()
    // firstNumber = '';
    // secondNumber = '';
    // xNumber = '';
    // yNumber = '';
    // sum = 0;
    // firstOperator = '';
    // equal = '';
    // inputScreen.textContent = '0';
    // outputScreen.textContent = '0.00'
    // operatorscreen.textContent = '_ _ _ _'
}


figures.forEach(button => button.addEventListener('click', showFirstInput));

operators.forEach(operator => operator.addEventListener('click', showOperator));

result.addEventListener('click', calculate);

reset.addEventListener('click', reseting);