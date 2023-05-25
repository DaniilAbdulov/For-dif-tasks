function isPalindrome(x) {
    let str = x.toLowerCase();
    let start = 0;
    let end = str.length - 1;
    while (start < end){
        const firstChar = str[start];
        const lastChar = str[end];
        if(firstChar !== lastChar){
            return false
        }
        start += 1;
        end -= 1;
    }
    return true

    
  }

console.log( isPalindrome('Mada') )