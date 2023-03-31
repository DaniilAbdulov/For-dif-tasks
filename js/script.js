'use strict';
var findErrorNums = function(nums) {
   let arr = [];
    for(let i = 0; i  < nums.length;i++){
      if(nums[i] == nums[i+1]){
        arr.push(nums[i])
        arr.push(nums[i]+1)
      }
    }
    return arr
};
console.log( findErrorNums([1,1]) );



