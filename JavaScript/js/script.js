'use strict';

let userName = prompt('Введите ваше имя','');

if (userName === 'admin'){
    let userPassword = prompt ('Введите пароль', '');
    if (userPassword === '1234'){
        alert('Пароль верный');
    }else if (userPassword === '' || userPassword === null){
        alert('Отменено');
    }else{
        alert('Неверно');
    }
}else if (userName === '' || userName === null){
    alert('Отменено');
}else{
    alert('Ты кто ?');
}