'use strict'
// function hello(){
//   console.log('Hello', this)
// }
// const person = {
//   name: 'Daniil',
//   age:25,
//   sayHello: hello,
//   logInfo: function(job,phone){
//     console.log(`Name is ${this.name}`)
//     console.log(`Age is ${this.age}`)
//     console.log(`Job is ${job}`)
//     console.log(`Phone is ${phone}`)
//   }
// }
// const lena = {
//   name:'Elena',
//   age:20
// }
// //person.logInfo.bind(lena,'Front','89220028666')();
// //person.logInfo.call(lena,'Front','89220028666');
// person.logInfo.apply(lena,['Front','89220028666']);

// const array = [1,2,3,4,5];
// // function multBy(arr,n){
// //   return arr.map(function(i){
// //     return i * n
// //   })
// // }
// Array.prototype.multBy = function(n){
//   return this.map(function(i){
//     return i * n
//   })
// }
// console.log(array.multBy(20))

var arraySign = function(nums) {
    let num = nums.reduce((a,b)=>a*b);
    function signFunc(n){
      return (n>0)?1:(n<0)?-1:0
    }
    return signFunc(num)
};
console.log( arraySign([1,5,0,2,-3]) )