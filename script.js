'use strict';
function countSheepsd(arrayOfSheep) {
  return arrayOfSheep.map(item=>+item).reduce( (s,c)=>s+c,0 )
}
console.log( countSheeps([true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]) );