function work(a, b) {
  console.log(a + b);
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log("call:" + args.join()); // "call:1,2", "call:4,5"
}

function spy(func) {
  function wrapper(...args) {
    let result = func.apply(this, args);
    wrapper.calls.push(args);

    return result;
  }

  wrapper.calls = [];

  return wrapper;
}
