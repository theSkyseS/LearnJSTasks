let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, prop, reciever) {
    if (prop < 0) {
      prop = +prop + target.length;
    }
    return Reflect.get(target, prop, reciever);
  },
});

console.log(array[-1]); // 3
console.log(array[-2]); // 2
