'use strict'

var lastStoneWeight = function(stones) {
  let arr = stones.sort( (a,b)=>b-a );
  let newArr = [];
  for(let i=0;i<arr.length;i++){
    newArr.push(arr[i]-arr[i+1])
    i++;
  }
  return newArr
};

console.log(lastStoneWeight([2,7,4,1,8,1]))

// [ 8, 7, 4, 2, 1, 1 ]