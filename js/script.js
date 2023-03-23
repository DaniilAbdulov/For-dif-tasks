'use strict';

function explode(x){
  function arr(n){
    let arr = [];
    for (let i = 0; i < n;i++){
      arr.push(x)
    }
    return arr;
  }
  return (typeof x[0] == 'string' || typeof x[1] == 'string') ? 'Void!' :
  (x.includes(0)) ? [] : 
  (typeof x[0] == 'number') ? arr(x[0]) :
  (typeof x[1] == 'number') ? arr(x[1]) :
  (typeof x[0] == 'number' || typeof x[1] == 'number') ? arr(x[0] + x[1]) : '';
}
console.log( explode(['c', 5]) );


