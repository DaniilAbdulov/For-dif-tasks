'use strict';

var maximum69Number  = function(num) {
    let arr = (num+'').split('').map(item=>+item)
    for (let i = 0; i < arr.length;i++){
      if (arr[i] == 9)continue;
      arr[i] = 6
      return arr
    }
};
console.log( maximum69Number(9669) );
