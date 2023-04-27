'use strict'

function lastDigit(as){
 let arr = as.map(item=>item/1000000);
 let val = Math.pow(arr[0],(Math.pow(arr[1],arr[2])));
 return val*1000000
}

console.log(lastDigit([12,30,21]))