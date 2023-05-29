function maxProduct(a) {
    let max1 = a[0];
    let max2;
    for(let i = 1;i < a.length; i++){
        if(a[i]>max1){
            max2 = max1;
            max1 = a[i];
        }else if (a[i]>max2){
            max2 = a[i]
        }
    }
    return max1 * max2
  }

console.log( maxProduct([56, 335, 195, 443, 6, 494, 252]) )

function maxProduct(a) {
    let max1 = a[0];
    let max2 = Math.max(...a);
    for(let i = 1;i < a.length; i++){
        if(a[i] == max2)continue;
        if(a[i]>max1){
            max1 = a[i];
        }
    }
    return max1 * max2;
  }

console.log( maxProduct([56, 335, 195, 443, 6, 494, 252]) )