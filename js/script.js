'use strict'
function rotatePaper(number) {
  if(number != 0 || number!= 8){return false}
  return (number.includes('1')||number.includes('4')||number.includes('7')) ? false : true
}
console.log(rotatePaper('6'))