'use strict'


var leftRigthDifference = function(nums) {
    let leftSum = [0];
    for(let i = 0;i<nums.length-1;i++){
      leftSum.push(leftSum[i]+nums[i])
    }
    nums.reverse();
    let rightSum = [0];
    for(let i = 0;i<nums.length-1;i++){
      rightSum.push(rightSum[i]+nums[i])
    }
    let right = rightSum.reverse();
    let answer = [];
    for(let i = 0; i < nums.length;i++){
      answer.push(Math.abs(leftSum[i]-right[i]));
    }
    return answer
};

console.log( leftRigthDifference([1]) )

