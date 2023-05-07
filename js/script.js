'use strict'

var createCounter = function(init) {
    let num = init;
    function increment(){
      return ++num;
    }
    function reset(){
      return num = init;
    }
    function decrement(){
      return --num;
    }
    return { increment, decrement, reset };
};

const counter = createCounter(5);
counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4