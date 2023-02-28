'use strict';
function switcher(x){
    let aplpabet = 'zyxwvutsrqponmlkjihgfedcba!? '
    return x.map(item=>aplpabet.charAt(+item-1)).join('')
  }



