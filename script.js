'use strict';
var reverse = function(x) {
    let str = x.toString()
    let reverse = str.split('').reverse().join('')
    if (str[0] == '-'){
      return reverse
    }return  +reverse
    
};

console.log( reverse( -123  ));

