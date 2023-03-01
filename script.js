'use strict';
function switcher(x){
    let aplpabet = 'zyxwvutsrqponmlkjihgfedcba!? '
    return x.map(item=>aplpabet.charAt(+item-1)).join('')
  }
console.log(  switcher([1,2,3,4]) );


