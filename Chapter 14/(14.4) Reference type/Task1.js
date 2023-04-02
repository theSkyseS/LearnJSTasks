let user = {
  name: "John",
  go: function () {
    console.log(this.name);
  },
}(user.go)();
//пропущена точка с запятой, соответсвенно получим вызов объекта как функции
