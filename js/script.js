
var sumOfUnique = function(nums) {
  let cache = new Set();
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!cache.has(nums[i])) {
      cache.add(nums[i]);
      sum += nums[i];
    }
    else {
      sum -= nums[i];
    }
  }
  return sum;
};

console.log( sumOfUnique([1,1,1,1,1,1]) );
