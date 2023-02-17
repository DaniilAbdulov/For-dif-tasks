'use strict';

function noSpace(x){
    return x.replace(/\'_'/g, '\b')
 }
   
console.log(noSpace('he ll o'));