"use strict"

let promptResult = prompt('Какое "официальное" название JavaScript?', "");

if (promptResult == "ECMAScript") {
    alert("Верно");
} else {
    alert('Не знаете? "ECMAScript"!');
}