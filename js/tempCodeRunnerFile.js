    function work(obj){
      let str = JSON.stringify(obj);
      let arr = [];
      for(let val of str){
        arr.push(val.codePointAt())
      }
      return arr.reduce( (a,b)=>a+b,0 );
    }
    let arr1 = work(o1);
    let arr2 = work(o2);
    return (arr1 == arr2) ? true : false;