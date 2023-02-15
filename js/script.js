'use strict';


function numToString (num){
  let string = 0;
  for (let i = num.length - 1; i >= 0 ; i--){
    string += +num[i];
  }
  return string
}


let a = numToString ('321');
let b = numToString ('123');

console.log(a == b);

