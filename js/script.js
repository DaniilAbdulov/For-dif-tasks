'use strict';

var dominantIndex = function(nums) {
    let example = nums.concat();
    let arr = nums.sort( (a,b) => b - a );
    return (arr[0] >= (2*arr[1])) ? example.indexOf(Math.max(...example)) : -1;
};

console.log( dominantIndex([3,6,1,0]) );
