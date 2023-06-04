var maximizeSum = function(nums, k) {
  let end = Math.max(...nums)
  let sum = 0;
  let i = 0;
  while(i < k){
    sum += end;
    end++
    i++
    console.log(end)
  }
  return sum;

};

console.log( maximizeSum([4,4,9,10,10,9,3,8,4,2,5,3,8,6,1,10,4,5,3,2,3,9,5,7,10,4,9,10,1,10,4],6) )