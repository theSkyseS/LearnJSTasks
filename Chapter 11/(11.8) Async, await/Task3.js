async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  // (async () => {
  //   let result = await wait();
  //   console.log(result);
  // })();
  wait().then(result => console.log(result));
}

f();
