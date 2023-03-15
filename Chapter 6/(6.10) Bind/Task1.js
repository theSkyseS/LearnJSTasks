"use strict"; // без строгого режима выведет глобальный объект
function f() {
  console.log(this); // null
}

let user = {
  g: f.bind(null),
};

user.g();
