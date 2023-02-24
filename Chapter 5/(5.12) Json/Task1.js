"use strict";

let user = {
  name: "Василий Иванович",
  age: 35,
};

let userJson = JSON.stringify(user);
let userParsed = JSON.parse(userJson);
