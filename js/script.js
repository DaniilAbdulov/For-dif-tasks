'use strict'
function minValue(values){
  let set = new Set();
  for(let val of values){
    set.add(val)
  }
  let arr = [...set].sort( (a,b)=> a - b).reduce((a,b)=>a+b,'')
  return +arr
}
console.log( minValue([1,6,3,4]) );
