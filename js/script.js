'use strict';

var uniqueInOrder=function(iterable){
  for (let i = 0; i < iterable.length; i++){
    let val = iterable[i];
    let newArr = iterable.slice(i);
    
    if (newArr.includes(val)){
      iterable.splice(i,1)
      i++
    }
  }
  return iterable
}

console.log( uniqueInOrder([1, 2, 2, 3, 3, 5, 5, 6, 6, 6, 7]) );
