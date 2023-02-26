'use strict';
function removeEveryOther(arr){
  let newArr = []
  for (let char of arr){
    if (arr.indexOf(char)%2==0){
      newArr.push(char)
    }
  }
  return newArr
}
console.log( removeEveryOther(["3","n","y","r","q","t","s","3","7","h","r","a","s","x","q","g","a","i","1"]) );

//'3', 'y', 'q', 's', '7', 'r', 's', 'q', 'a', '1'
