function CreateObject(isValid) {
  this.isValid = isValid;
}
CreateObject.prototype = {}; //для создания obj2 будет вызван конструктор Object

let obj = new CreateObject(true);
let obj2 = new obj.constructor(true);
console.log(obj.isValid); //true
console.log(obj2.isValid); //undefined
