'use strict';

function longestRepetition(s) {
  let str = s;

  let target = 'Иа'; // цель поиска
  
  let pos = 0;
  while (true) {
    let foundPos = str.indexOf(target, pos);
    if (foundPos == -1) break;
  
    alert( `Найдено тут: ${foundPos}` );
    pos = foundPos + 1; // продолжаем со следующей позиции
  }
}
console.log( longestRepetition("aaaabb") );
