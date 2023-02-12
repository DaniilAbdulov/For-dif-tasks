'use strict';

function powersOfTwo(n){
    let arr =[];
    for (let i = 0; i <= n; i++){
      arr.push(2**i)
    }
    return arr;
  }
powersOfTwo(0)

// assert.deepEqual(powersOfTwo(0), [1])
// assert.deepEqual(powersOfTwo(1), [1, 2])
// assert.deepEqual(powersOfTwo(4), [1, 2, 4, 8, 16])