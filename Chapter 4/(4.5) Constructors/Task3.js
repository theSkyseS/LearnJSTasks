"use strict";
function Accumulator(startingValue) {
  this.value = +startingValue;

  this.read = function () {
    this.value += +prompt("Введите число", 0);
  };
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

console.log(accumulator.value);
