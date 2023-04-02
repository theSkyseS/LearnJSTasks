let handlers = Symbol("handlers");

function makeObservable(target) {
  target[handlers] = [];

  target.observe = function (handler) {
    this[handlers].push(handler);
  };
  return new Proxy(target, {
    set(target, prop, newValue, reciever) {
      let setSuccess = Reflect.set(target, prop, newValue, reciever);
      if (setSuccess) {
        target[handlers].forEach(handler => handler(prop, newValue));
      }
      return setSuccess;
    },
  });
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
  console.log(`SET ${key}=${value}`);
});

user.name = "John";
