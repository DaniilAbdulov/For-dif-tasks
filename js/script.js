'use strict';
//2.Add two Numbers в логе все работает но LeetCode ругается на ошибку в 5 строке n.reverse() не является функцией
var addTwoNumbers = function(l1, l2) {
    function fromStringtoNumber(n){
        let arr = n.reverse().join('');
        return +arr;
    }
    let one = fromStringtoNumber(l1);
    let two = fromStringtoNumber(l2);
    let str = one + two + '';
    let arr = [];
    for (let i = 0; i < str.length; i++){
    arr.push(str[i]);
    }
    for (let i = 0; i < arr.length; i++){
    arr[i] = +arr[i];
    }
    return arr.reverse();
    
};

console.log( addTwoNumbers([1,2,3],[4,5,6]) );
