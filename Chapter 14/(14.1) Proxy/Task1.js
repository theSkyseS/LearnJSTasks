let user = {
  name: "John",
};

function wrap(target) {
  return new Proxy(target, {
    get(target, prop, reciever) {
      if (prop in target) {
        return Reflect.get(target, prop, reciever);
      } else {
        throw new ReferenceError(`Property doesn't exist: ${prop}`);
      }
    },
  });
}

user = wrap(user);

console.log(user.name);
console.log(user.age);
