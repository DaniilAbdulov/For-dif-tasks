'use strict';
//896.Monotonic Array
var smallerNumbersThanCurrent = function(nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i++){
        let sum = 0;
        for (let j = 0; j < nums.length; j++){
            if (nums[i] > nums[j]){
                sum+=1;
            }
        }arr.push(sum);
    }
    return arr;
};


console.log( smallerNumbersThanCurrent([8,1,2,2,3]));


