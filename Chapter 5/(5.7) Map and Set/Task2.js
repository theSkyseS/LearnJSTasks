"use strict";

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));

function aclean(arr) {
  let anagMap = new Map();

  for (let elem of arr) {
    let letters = elem.toLowerCase().split("").sort().join("");
    anagMap.set(letters, elem);
  }
  return Array.from(anagMap.values());
}
