"use strict";
function camelize(str) {
  let words = str.split("-");
  return words
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}
