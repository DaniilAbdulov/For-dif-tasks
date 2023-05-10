'use strict'


function bouncingBall(h,  bounce, window) {
  if(h > 0 && (bounce > 0 && bounce < 1) && h > window){
    let count = 1;
    let res = h;
    while(res > window){
      let p = 1;
      res *= Math.pow(bounce,p)
      count += 2;
      p++
    }
    return count-2
  }else{
    return -1;
  }
 
}
console.log( bouncingBall(3.0, 1.0, 1.5) );

