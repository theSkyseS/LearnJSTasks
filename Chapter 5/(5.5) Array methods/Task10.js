"use strict";

function shuffle(array) {
  var j = array.length,
    i;
  while (j) {
    i = Math.floor(Math.random() * j--);
    [array[i], array[j]] = [array[j], array[i]];
  }
}
