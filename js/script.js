'use strict'


function maxMultiple(divisor, bound){
  let arr = [];
  for(let i = 1;i<bound;i++){
    if(divisor*i <= bound){
      arr.push(divisor*i);
    }
  }
  return Math.max(...arr);
}
console.log( maxMultiple(2,7) )

