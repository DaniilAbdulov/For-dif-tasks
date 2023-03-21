'use strict';

function replicate(times, number) {
	let arr = [];
  if (times == 1){
    return times
  }else{
    return arr.push(replicate(times-1,number))
  }
}
console.log( replicate(3,1) );


