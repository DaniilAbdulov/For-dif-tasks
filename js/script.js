'use strict';

function initializeNames(name){
  let arr = name.split(' ');
  if (arr.length <= 2){
    return name
  }else{
    let newArr = arr.slice(1).reverse().slice(1).reverse();
    let elem = []
    for (let i = 0;i < newArr.length;i++){
      elem.push(newArr[i][0]+'.')
    }
    return arr[0] + ' ' +elem.join(' ') + ' ' + arr.at(-1)
  }
}
console.log( initializeNames('Lois Mary Lane') );


