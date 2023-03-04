'use strict';

var twoSum = function(nums, target) {
  // if(nums[0] == 0 || target == 0){
  //   return [1,2]
  // }
  let left = 0;
  let right = nums.length-1;
  while(left < right){
    sum = nums[left] + nums[right]
    if (sum == target){
      return [left+1,right+1]
    }else if (sum < target){
      left += 1
    }else {
      right -= 1
    }
  }return [nums[left],nums[right]]



};
console.log( twoSum([3,24,50,79,88,150,345], 200));

