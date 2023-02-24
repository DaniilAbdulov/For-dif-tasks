'use strict';

var singleNumber = function(nums) {
  let arr =[]
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    nums.slice(val)
    if (nums.includes(val)){
        i++
    }
    arr.push(nums.indexOf(val))
  }return arr
  

}
console.log( singleNumber([2,2,1]) );
