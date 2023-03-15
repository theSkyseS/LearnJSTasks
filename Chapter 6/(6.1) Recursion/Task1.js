"use strict";
function sumToIteartions(n) {
  let sum = 1;
  for (let i = 2; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function sumToRecursive(n) {
  return n > 1 ? n + sumToRecursive(n - 1) : n;
}

function sumToProgression(n) {
  return ((1 + n) / 2) * n;
}

console.log(sumToIteartions(100)); //faster
console.log(sumToRecursive(100)); //slowest
console.log(sumToProgression(100)); //fastest
