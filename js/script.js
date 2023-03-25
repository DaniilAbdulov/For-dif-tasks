'use strict';
function findUniq(arr) {
  let set = new Set(arr);
  let newArr = Array.from(set);
  let one = arr.filter(item=>item == newArr[0])
  let two = arr.filter(item=>item == newArr[1])
  return (two.length < one.length) ? two[0] : one[0];
}
console.log(  findUniq([ 1, 1, 1, 2, 1, 1 ]))


