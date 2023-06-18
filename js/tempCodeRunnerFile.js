  function maximun(first,second){

    while(second <= numbers.length){
      max = numbers[first];
      min = numbers[second];
   
      if(max > min)continue;
      if(max < min){
        max = min
      }
      
  
  
      first++
      second++
      
    }
    return max
  }