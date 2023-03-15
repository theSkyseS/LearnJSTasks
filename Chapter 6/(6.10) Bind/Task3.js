function sayHi() {
  console.log(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася",
});

console.log(bound.test); //undefined, bind создаёт новую функцию с телом оригинальной функции
