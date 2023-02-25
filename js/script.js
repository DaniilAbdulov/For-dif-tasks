'use strict';



var longestCommonPrefix = function(strs) {
  strs.sort();
  let s1 = strs[0];
  let s2 = strs[strs.length-1];
  let idx = 0;
  while(idx < s1.length && idx < s2.length){
      if(s1.charAt(idx) == s2.charAt(idx)){
          idx++;
      } else {
          break;
      }
  }
  return s1.substring(0, idx);
}




console.log( longestCommonPrefix(["flowower","flow","flight"]) );
console.log( longestCommonPrefix(["flower","flower","flower","flower"]) );
console.log( longestCommonPrefix(["aaa","aa","aaa"]) );
