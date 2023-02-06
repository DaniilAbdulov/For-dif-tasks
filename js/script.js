'use strict';

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function func(){
//   for (let key in menu){
//     if (typeof menu[key] == 'number'){
//       menu[key]*=2;
//     }
//   }
// }
// func();
// console.log(menu);

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// let sum = 0;

// for (let key in salaries){
//   sum += salaries[key];
// }
// console.log(sum);

let obj = {
  name:'Daniil',
}
function isEmpty(obj){
  for (let key in obj){
    return false
  } return true
}
console.log( isEmpty(obj) )