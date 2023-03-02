'use strict';
var containsDuplicate = function(nums) {
    let set = new Set (nums)
    let n = Array.from(set);
    return nums.length != n.length
};
console.log( containsDuplicate([1,2,3,1]) );

