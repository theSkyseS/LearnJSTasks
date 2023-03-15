"use strict";
let i = 0;

setTimeout(() => console.log(i), 100); // 100000000, таймер выполнится после выполнения кода

for (let j = 0; j < 100000000; j++) {
  i++;
}
