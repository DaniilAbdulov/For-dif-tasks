'use strict';
// 2. Add Two Numbers. Проблема в том, что в 5 строке не работает n.reverser()
var addTwoNumbers = function(l1, l2) {
    function fromStringtoNumber(n){
        let arr = n.reverse();
        let arrR = arr.join('');
        return +arrR;
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


console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]));

