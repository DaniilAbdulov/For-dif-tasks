'use strict'


var singleNumber = function(nums) {
    let uniqNum = 0;
    for (let i = 0; i < nums.length; i++) {
        console.log(uniqNum);
        console.log(nums[i])
        console.log('-');
        uniqNum = uniqNum ^ nums[i];
        console.log(uniqNum);
        console.log(nums[i])
        console.log('-');
        
    } return uniqNum;
};
singleNumber([2,2,1]) 