function multiplyNumeric(obj) {
  for (let field in obj) {
    if (typeof obj[field] == "number") {
      obj[field] *= 2;
    }
  }
}
