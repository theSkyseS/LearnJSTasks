let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

console.log(bed.glasses);
console.log(pockets.pen);
/*современные движки запоминают, где было найдено свойство, так что с точки зрения производительности 
разницы между pocket.glasses и head.glasses не будет.*/
