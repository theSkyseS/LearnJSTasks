"use strict";
let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

console.log(arr);

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];

    if (elem < a || elem > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
