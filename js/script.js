'use strict';

var multiply = function(num1, num2) {
    let one = BigInt(num1);
    let two = BigInt(num2);
    return one * two +''
};
console.log( multiply("123456789","987654321") );
