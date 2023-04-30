'use strict'

function Rab(){
  this.name = 'Daniil'
  console.log(this.name)
}

let obj = new Rab();
let obj2 = new obj.constructor();