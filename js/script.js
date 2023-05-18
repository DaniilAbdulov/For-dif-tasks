'use strict'
var sumOfMultiples = function(n) {
    let arr = [];
    for(let i = 1;i<=n;i++){
        if((i % 3 == 0) || (i % 5 == 0) || (i % 7 == 0)){
            arr.push(i)
        }
    }
    return arr.reduce( (a,b)=> a + b,0 );
};
console.log( sumOfMultiples(7) )
