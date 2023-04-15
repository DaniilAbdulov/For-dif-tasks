'use strict';

var areDeeplyEqual = function(o1, o2) {
  if(Array.isArray(o1) && Array.isArray(o2)){
    let ab = o1.reduce( (a,b)=> a+b,0 );
    let bc = o2.reduce( (a,b)=> a+b,0 );
    
    
    if(o1.length == 0 && o2.length == 0){
      return true
    }
    if(o1.length != o2.length){
      return false;
    }
    if(typeof ab == 'number' && typeof bc == 'number'){
      for(let i = 0;i < o1.length;i++){
        if(o1[i] != o2[i])break;  
        return true
      }return false
    }
  }
  function work(obj){
    let str = JSON.stringify(obj);
    let arr = [];
    for(let val of str){
      arr.push(val.codePointAt())
    }
    return arr.reduce( (a,b)=>a+b,0 );
  }
  let arr1 = work(o1);
  let arr2 = work(o2);
  return (arr1 == arr2) ? true : false;
  
};
let obj1 = [3,2,1]
let obj2 = [1,2,3]
console.log(areDeeplyEqual(obj1,obj2))


