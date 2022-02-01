'use strict'
function solveEquation(a, b, c) {

  let d = b * b - 4 * a * c;
  if (d < 0) {
    return [];
  }
  if (d === 0) {
    let x = -b / (2 * a);
    return [x];
  }
  if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    return [x1, x2];
  }

  return arr; // array
}




function calculateTotalMortgage(percent, contribution, amount, date) {

  let nowTime = new Date();
  let oneDay = 1000 * 60 * 60 * 24;
  let kreditDate = parseInt((date.getTime() - nowTime.getTime()) / oneDay * 30);
  let kreditBody = parseInt(amount - contribution);
  let p = parseInt(percent / 12 / 100);
  let payment = kreditBody * (p + (p / (((1 + p) ^ kreditDate) - 1)))
  let totalAmount = parseInt((payment * kreditDate).toFixed(2));


  return console.log(totalAmount);
}
