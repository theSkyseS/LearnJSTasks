"use strict";
let date = new Date(2012, 0, 3); // 3 января 2012 года

function getLocalDay(date) {
  let day = date.getDay();

  if (day == 0) return 7;
  return day;
}

console.log(getLocalDay(date));
