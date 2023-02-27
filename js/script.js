'use strict';
function switcher(x){
    let aplpabet = 'zyxwvutsrqponmlkjihgfedcba!? '
    return x.map(item=>aplpabet.charAt(+item-1)).join('')
  }
console.log( switcher(['24', '12', '23', '22', '4', '26', '9', '8']) );


