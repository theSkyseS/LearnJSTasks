function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let number = i;
    let shooter = function () {
      // функция shooter
      console.log(number); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0]();
army[5]();
