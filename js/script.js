
let data = new Date(1976, 05, 03);
function dateOfBirth(d){
  return (Date.now() - d.getTime())/3.154e+10;
}

let answer = document.querySelector('.posts__list')
answer.innerHTML = dateOfBirth(data).toFixed(0);