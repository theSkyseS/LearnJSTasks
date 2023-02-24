"use strict";

function truncate(str, maxLength) {
  if (str.length > maxLength) {
    str = str.slice(0, maxLength - 1) + "…";
  }
  return str;
}
