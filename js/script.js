'use strict'

let a = document.getElementById('cl')
a.style.opacity = '0';

let n = document.querySelector('.box');
n.style.opacity = '0';

function hide(elem){
    elem.style.opacity = '1'
}
setTimeout(()=>hide(n),2000);
setTimeout(()=>hide(a),7000);
