'use strict';

function getCount(str) {
  const words  = ['a','e','i','o','u'];
  let arr = str.split('')
  return arr.filter(item=>words.includes(item)).length;
}
console.log( getCount("abracadabra") );
