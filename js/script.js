'use strict';

function arrayDiff(a, b) {

    for (let i = 0; i < a.length; i++) {
      let val = a[i];

      if (b.includes(val)) {
        a.splice(i, 1);
        i--;
      }
    }
    return a;
}

console.log( arrayDiff([1,2,3], [1,2]) );