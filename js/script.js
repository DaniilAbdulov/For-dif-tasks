'use strict';

var fractionToDecimal = function(numerator, denominator) {
    let result = numerator/denominator;
    let str = result +'';
    if (str.length > 4){
      return Math.trunc(result) + '.' + `(${str.slice(2,5)})`
    }return str
};
console.log( fractionToDecimal(1,6) );


