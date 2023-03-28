let animal = {
  eat() {
    this.full = true;
  },
};

let rabbit = {
  __proto__: animal,
};

rabbit.eat();
//rabbit
console.log(Object.keys(rabbit)); //[ 'full' ]
