"use strict";

function formatDate(date) {
  let diffMs = Date.now() - date;
  let diffSeconds = Math.floor(diffMs / 1000);
  let diffMinutes = diffSeconds / 60;
  let diffHours = diffMinutes / 60;

  if (diffSeconds < 1) {
    return "прямо сейчас";
  } else if (diffMinutes < 1) {
    return `${diffSeconds} сек. назад`;
  } else if (diffHours < 1) {
    return `${diffMinutes} мин. назад`;
  } else {
    let year = date.getFullYear().toString().slice(-2);
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${day}.${month}.${year} ${hours}:${minutes}`;
  }
}
