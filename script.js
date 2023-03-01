'use strict';
function longestConsec(strarr, k) {
  let arr = []
  for (let i = 0;i < strarr.length-1;i++){
    arr.push(strarr[i]+strarr[i+1])
  }
  return Math.max(...arr.map(item=>item.length))
}
console.log(longestConsec (["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"] ,2));

