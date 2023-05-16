'use strict'

var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies);
    let n = extraCandies;
    let arr = candies.map(item=>item+n);

    return arr.map(item=>item>=max);
};

console.log( kidsWithCandies([2,3,5,1,3],3) )

