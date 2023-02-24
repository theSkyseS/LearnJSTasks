"use strict";

function sumInput() {
  let array = [];
  while (true) {
    let input = prompt("Введите число", "");

    if (input === null || input === "") break;

    array.push(+input);
  }

  let sum = 0;

  for (let number of array) {
    sum += number;
  }

  return sum;
}
