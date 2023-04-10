'use strict';


var findTheLongestBalancedSubstring = function(s) {
    let arr = [...s].sort( (a,b)=> a -b)
    let count = 0;
    for (let i = 0;i < arr.length;i++){
      for(let j = arr.length-1; j > i; j--){
        if(i != j)
      }
    }
};

console.log(findTheLongestBalancedSubstring('01000111'));

