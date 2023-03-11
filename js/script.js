'use strict';

function yearDays(year){
  let date = new Date(year,2,0);
  let day = date.getDate()
  return (day == 29) ? `${year} has 366 days`:`${year} has 365 days`
}

console.log( yearDays(-64) );
