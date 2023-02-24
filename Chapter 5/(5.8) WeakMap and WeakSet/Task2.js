"use strict";

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let readMessages = new WeakMap();

readMessages.set(messages[0], Date.now()); //прочитано

console.log(readMessages.has(messages[0])); //true
console.log(readMessages.get(messages[0])); // когда прочитано
console.log(readMessages.has(messages[1])); //false
