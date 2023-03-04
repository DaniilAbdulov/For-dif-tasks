  let min = Math.min(...arr)
  let ind = prices.indexOf(min)
  let newArr = arr.slice(ind);
  
  return Math.max(...newArr)-min