'use strict'

var average = function(salary) {
    let arr = salary.sort( (a,b)=>a-b ).slice(0,salary.length-1)
    let workarr = arr.slice(1,arr.length);
    return workarr.reduce( (a,b)=>a+b,0 )/workarr.length;
};
console.log(average([4000,3000,1000,2000]))