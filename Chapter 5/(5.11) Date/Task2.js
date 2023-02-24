"use strict";
let date = new Date(2012, 0, 3); // 3 января 2012 года

function getWeekDay(date) {
  let weekDays = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

  return weekDays[date.getDay()];
}

console.log(getWeekDay(date));
