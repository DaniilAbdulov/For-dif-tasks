'use strict'

var sortSentence = function(s) {
    let str = s.split(' ');
    let arr = [];
    for(let i = 0; i < str.length;i++){
        let n = i+1;
        for(let j = 0; j < str.length;j++){
            if(str[j].includes(n)){
                arr[i] = str[j]
            }
        }
    }
    return arr.map(item=>item.slice(0,item.length-1)).join(' ');
};

console.log( sortSentence('is2 sentence4 This1 a3') )