function printNumbersInterval(from, to) {
  let current = from;

  let timer = setInterval(() => {
    console.log(current);
    if (current == to) clearInterval(timer);
    current++;
  }, 1000);
}

function printNumbersTimeout(from, to) {
  let current = from;

  setTimeout(function printer() {
    console.log(current);
    if (current == to) return;
    current++;
    setTimeout(printer, 1000);
  }, 1000);
}

printNumbersInterval(1, 5);
printNumbersTimeout(1, 5);
