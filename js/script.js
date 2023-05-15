'use strict'

function removeSmallest(numbers) {
  let min = numbers.indexOf(Math.min(...numbers));
  let arr = numbers;
  arr.splice(min,1)
  return arr;
}
console.log( removeSmallest([196, 291, 112, 71, 181]) )



