'use strict';

function prod2sum(a, b, c, d) {
  let arr = []
  let n = (Math.pow(a,2) + Math.pow(b,2)) * (Math.pow(c,2)+ Math.pow(d,2));
  for (let i = 1; i < n; i++){
    for (let j = 1; j < n; j++){
      if ((Math.pow(i,2) + Math.pow(j,2)) == n){
        arr.push(i)
        arr.push(j)
      }
    }
  }
  if (arr.length > 4){
    let newArr = arr.slice(0,4)
    let one = newArr.slice(0,2)
    let two = newArr.slice(2)
    let result = [one, two]
    return result
  }else {
    return [arr.slice(0,2)]
  }

}
console.log( prod2sum(1, 1, 3, 5) );
