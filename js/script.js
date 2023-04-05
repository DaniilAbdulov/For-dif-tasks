'use strict';
var capitals = function (word) {
	let arr = [...word].map(item=>item.codePointAt(0));
  let newArr = arr.filter(item=> item > 64 && item < 91);
  let answer = [];
  for(let i = 0;i < newArr.length;i++){
    answer.push(arr.indexOf(newArr[i]))
  }
  return answer;
};

console.log( capitals('CodEWaRs') )
