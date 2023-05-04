'use strict'

let arr = [1,2,3,4];

Array.prototype.m = function(n){
    return this.map(function(i){
        return i + n
    })
}

console.log(arr.m('-'))