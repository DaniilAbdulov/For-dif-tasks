// const sumSquareEvenRootOdd = ns => {
//   return ns
// };
var sumSquareEvenRootOdd = function(ns){
  let sum = 0;
  for(let i = 0; i < ns.length; i++){
    if(ns[i] % 2 == 0){
      sum += Math.pow((ns[i]),2)
    }else {
      sum += Math.sqrt(ns[i])
    }
  }
  return +sum.toFixed(2)
  
}

console.log(sumSquareEvenRootOdd([4,5,7,8,1,2,3,0]))