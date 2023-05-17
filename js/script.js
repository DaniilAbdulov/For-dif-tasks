'use strict'
class Sum{
    constructor(num1,num2){
        this.a = num1;
        this.b = num2;
    }
    sum(){
        return this.a + this.b;
    }
}
let s = new Sum(1,2);
console.log( s.sum() );
