'use strict'

function sortArray(array) {
  let arrOdd = array.filter(item=>item%2!=0);
  return arrOdd
}
console.log(sortArray([5, 8, 6, 3, 4]))