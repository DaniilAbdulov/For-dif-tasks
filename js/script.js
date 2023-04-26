'use strict'
function formatDuration (seconds) {
  let date = new Date();
  date.setUTCHours(0,0)
  date.setSeconds(seconds);
  let hour = date.getUTCHours();
  let minutes = date.getUTCMinutes();
  let sec = date.getUTCSeconds();
  return (`${hour} hour, ${minutes} and ${sec}`)
}
console.log(formatDuration(3655))