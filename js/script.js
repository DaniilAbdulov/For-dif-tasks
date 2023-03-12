'use strict';

function findOutlier(integers){
  let arr = Array.from(new Set(integers))
  if(arr[0]%2==0 && arr[1]%2==0){
    for (let val of arr){
      if (val % 2 == 1){
        return val
      }
    }
  }else {
    for (let val of arr){
      if (val % 2 == 0){
        return val
      }
    }
  }
}

console.log( findOutlier([1, 2, 3]) );
