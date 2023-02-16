'use strict';

var reversePrefix = function(word, ch) {
    let pos = word.indexOf (ch) + 1;
    let str = word.slice(0,pos);
    return str.split("").reverse().join("") + word.slice(pos);
};

console.log(reversePrefix("abcdefd", "d"));