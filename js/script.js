'use strict'
function discr(a,b,c){
    let d = Math.pow(b,2) - 4*a*c;
    if(d > 0){
        let one = Math.abs((b + Math.sqrt(d))/2*a);
        let two = Math.abs((b - Math.sqrt(d))/2*a);
        return `Первый корень: ${one}, а второй: ${two};`
    }else if(d == 0){
        return (-b)/2*a
    }else{
        return 'Корней нет'
    }
}
console.log( discr(-1,7,-10) );