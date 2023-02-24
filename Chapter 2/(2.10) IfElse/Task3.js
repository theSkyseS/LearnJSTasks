"use strict"

let promptResult = +prompt('Введите число', "0");
let value;

if (promptResult > 0) {
    value = 1;
} else if (promptResult < 0) {
    value = -1;
} else {
    value = 0;
}

alert(value);