"use strict";

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let readMessages = new WeakSet();

readMessages.add(messages[0]); //прочитано

console.log(readMessages.has(messages[0])); //true
console.log(readMessages.has(messages[1])); //false
