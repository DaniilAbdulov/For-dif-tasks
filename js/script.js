
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   function showOk() {
//     alert( "Вы согласны." );
//   }
  
//   function showCancel() {
//     alert( "Вы отменили выполнение." );
//   }
 
//   ask("Вы согласны?", showOk, showCancel);


// function ask(question, yes, no){
//     if (confirm(question)) yes()
//     else no();
// }

// ask('Вы согласны ?', 
//     function(){alert ('Вы нажали ок')},
//     function(){alert('Вы нажали отмена')});
    
function ask(question, yes, no){
    if (confirm(question)) yes()
    else no();
}

ask('Вы согласны ?', 
    ()=>alert ('Вы нажали ок'),
    ()=>alert('Вы нажали отмена'));