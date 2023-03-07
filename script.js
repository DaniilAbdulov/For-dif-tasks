'use strict';

function findUniq(arr) {
  if(arr[0]==1){
    return +0
    
  }else if(arr.length==1){
    return +arr[0]
  }
  let a = Array.from(new Set(arr))
  let indOne = arr.indexOf(a[0])
  let indTwo = arr.indexOf(a[1])
  a.splice(indOne,1).splice(indTwo,1)
  return a[0]
}
console.log( findUniq([1]) );