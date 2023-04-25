'use strict'

function slow(x){
  console.log(`Called with ${x}`);
  return x;
}
function cachingDecorator(func) {
  let cache = new Map();

  return function(x) {
    if (cache.has(x)) {   
      console.log('я сработал') // если кеш содержит такой x,
      return cache.get(x); // читаем из него результат
    }

    let result = func(x); // иначе, вызываем функцию

    cache.set(x, result); // и кешируем (запоминаем) результат
    console.log(cache)
    return result;
  };
 
}
slow = cachingDecorator(slow);
console.log( slow(1) ); // slow(1) кешируем
console.log( "Again: " + slow(1) ); // возвращаем из кеша

console.log( slow(2) ); // slow(2) кешируем
console.log( "Again: " + slow(2) ); // возвращаем из кеша
