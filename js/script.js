'use strict';
const sumNested = l => {
    if(Array.isArray(l)){
      return l.reduce( (a,b)=> a+b,0 )
    }else{
      let sum = 0;
      for (let sub of Object.entries(l)){
        sum += sumNested(sub)
      }
      return sum
    }
};
console.log(sumNested([10,[[10],10],[10]]));


