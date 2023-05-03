'use strict'
let findDifference = (nums1, nums2)=> {
    let arr1 = new Set(nums1);
    let arr2 = new Set(nums2);
    for(let val of arr1){
        if(arr2.has(val)){
            arr1.delete(val);
            arr2.delete(val);
        }
    }
    return [Array.from(arr1), Array.from(arr2)];
};

console.log( findDifference([1,2,3,3],[1,1,2,2]) )