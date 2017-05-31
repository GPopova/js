"use strict";

var firstNumber,
    secondNumber,
    sign,
    allowZero = true;

firstNumber = getNumber('первое', allowZero);
do {
    sign = prompt("Введите знак действия (+-*/):");
} while (sign === '' || "+-*/".indexOf(sign) === -1);

if (sign === '/')
    allowZero = false; //если выбрано деление, то второе число не может быть 0

secondNumber = getNumber('второе', allowZero);

switch (sign) {
    case '+': alert(sum(firstNumber, secondNumber));
        break;
    case '-': alert(sub(firstNumber, secondNumber));
        break;
    case '*': alert(mul(firstNumber, secondNumber));
        break;
    case '/': alert(div(firstNumber, secondNumber));
        break;
}
/*
Функции
 */
function getNumber(numberName, allowZero) {
    var number;
    do {
        number = prompt("Введите " + numberName + " число:");
    } while (!isNumeric(number) || (!allowZero && number == 0));
    return +number;
}

function isNumeric(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
}

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}