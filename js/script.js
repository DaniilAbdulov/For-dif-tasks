var twoSum = function(nums, target) {
  let first = 0;
  let second = 1;
  let sum = 0
  while(sum != target){
    sum = nums[first] + nums[second];
    first = second;
    second +=1;
  }
  return [first-1,second-1]
}
console.log( twoSum([3,2,4], 6) );
