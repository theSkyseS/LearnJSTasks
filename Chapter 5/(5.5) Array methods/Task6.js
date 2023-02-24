"use strict";

function Calculator() {
  this.operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  this.addMethod = function (operator, func) {
    this.operators[operator] = func;
  };

  this.calculate = function (str) {
    let inputs = str.split(" ");
    let a = +inputs[0];
    let operator = inputs[1];
    let b = +inputs[2];

    if (isNaN(a) || isNaN(b) || !this.operators[operator]) {
      return NaN;
    }

    return this.operators[operator](a, b);
  };
}
