'use strict';
//896.Monotonic Array
var mergeTwoLists = function(list1, list2) {
    let arr = []
    let newArr = arr.concat(list1, list2)
    return newArr.sort( (a,b) => a -b )
};
console.log( mergeTwoLists([1,2,4],[1,3,4]) );


