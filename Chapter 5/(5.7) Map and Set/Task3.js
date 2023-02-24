let map = new Map();

map.set("name", "John");

//let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
//keys.push("more");
// map.keys возвращает итерируемый объект

let keys = Array.from(map.keys());

keys.push("more");
