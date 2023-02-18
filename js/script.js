'use strict';
//896.Monotonic Array
var isMonotonic = function(nums) {
    if (nums[0] < nums.length-1) {
        for (let i = 0; i <nums.length; i++){
            if (nums[i+1]<=i)continue;
            return 'он монотонный возрастает'
        }
    }else if(nums[0] > nums.length-1){
        for (let i = 0; i <nums.length; i++){
            if (nums[i]<=i+1)continue;
            return 'он монотонный убыв'
        }
    }else false  
};
console.log( isMonotonic([1,3,2]) );