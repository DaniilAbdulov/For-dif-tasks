'use strict';
var sortArrayByParity = function(nums) {
    let arrEven = [];
    let arrOdd = [];
    for(let i = 0;i<nums.length;i++){
      if(nums[i] % 2 == 0){
        arrEven.push(nums[i])
      }else{
        arrOdd.push(nums[i])
      }
    }
    let ans = arrEven.concat(arrOdd);
    return ans;
};
    
console.log( sortArrayByParity([3,1,2,4]) );



