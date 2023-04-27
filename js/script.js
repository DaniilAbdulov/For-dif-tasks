'use strict'
function formatDuration (seconds) {
  let date = new Date();
  date.setUTCHours(0,0)
  date.setSeconds(seconds);
  let h = date.getUTCHours();let m = date.getUTCMinutes();let s = date.getUTCSeconds();
  let hour = string(h,' hour');let min = string(m, ' minute');let sec = string(s, ' second')
  function string(val,name){
    if(val == 1){
      return val + name;
    }else if(val > 1){
      return val + name + 's';
    }else if(val == 0){
      return val = '';
    }
  }
  if(h>0 && m>0){return hour + ', ' + min + ' and ' + sec};
  if(h==0 && m>0 && s>0){return min + ' and ' + sec};
  return hour + min + sec
}
console.log(formatDuration(3662))