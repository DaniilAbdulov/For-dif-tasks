'use strict'

function convertTemperature(Celsius){
  let arr = [Celsius + 273.15,Celsius*1.8 + 32];
  return arr;
}
console.log( convertTemperature(36.5) )