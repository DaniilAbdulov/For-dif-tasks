function maxProduct(a) {
    let one;
    let two;
    let start = 0;
    let end = a.length-1;
    function search(arr){
        one = arr[start];
        two = arr[end];
        while(start < end){
            if(one > arr[start+1]){
                continue
            }else{
                one = arr[start+1]
            }
        }
        start += 1;
        end -= 1;
    }
    search(a)
    return one
  }

console.log( maxProduct([56, 335, 195, 443, 6, 494, 252]) )