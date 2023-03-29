function* pseudoRandom(seed) {
  let next = seed;
  while (true) {
    next = (next * 16807) % 2147483647;
    yield next;
  }
}

let generator = pseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073
