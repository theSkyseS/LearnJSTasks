function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert(a instanceof B); // true
//потому что A.prototype = B.prototype = {};
