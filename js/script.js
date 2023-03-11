'use strict';

function ageInDays(year, month, day){
  var birthday = new Date();
  birthday.setDate(birthday.getDate() - 365);
  return birthday

}

console.log( ageInDays(2023,2,1) );
