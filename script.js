'use strict';
function descendingOrder(n){
  let arr = n.toString().split('').map(item=>+item).sort( (a,b)=>b-a ).join('')
  return +arr
}
console.log( descendingOrder(124));

