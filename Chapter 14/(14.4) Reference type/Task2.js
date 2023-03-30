let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();               // (1) [object Object] 

(obj.go)();             // (2) [object Object] (1) и (2) вызывают функцию go() на объекте obj

(method = obj.go)();    // (3) undefined вызывается method, который не получает this

(obj.go || obj.stop)(); // (4) undefined в результате выражения получается функция, которая вызывается без this