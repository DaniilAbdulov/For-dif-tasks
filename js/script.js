'use strict';
// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

 

// Example 1:

// Input: num1 = "11", num2 = "123"
// Output: "134"


// let sum = (num1, num2)=>{
//     let result = + num1 + + num2;
//     return String(result); 
// }
// alert (sum('11','12'))

function convert(Celsius){
    function Kelvin(){
        return Celsius + 273.15;
    }
    function Fahrenheit(){
        return Celsius*1.8 + 32;
    }

    return Kelvin(),Fahrenheit();
}
console.log(convert(36.5));
