let f = debounce(console.log, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout(() => f(4), 1100); // выполняется
setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)

function debounce(func) {
  let isOnCooldown = false;

  return function () {
    if (isOnCooldown) return;

    func.apply(this, arguments);
    isOnCooldown = true;

    setTimeout(() => (isOnCooldown = false), 1000);
  };
}
