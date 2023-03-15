function sum(a) {
  let currSum = a;
  function inSum(b) {
    currSum += b;
    return inSum;
  }

  inSum.valueOf = function () {
    return currSum;
  };

  return inSum;
}

console.log(+sum(1)(2));
console.log(+sum(5)(-1)(1)(10));
