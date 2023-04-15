'use strict';


function sum(n){
  return function(a){
    return n ** a;
  }
}
let first = sum(4);
console.log(first(20));

