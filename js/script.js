'use strict';



function pizza(a, b) {
    function area(d){
        return 3.14 * Math.pow(d/2, 2)
    }
    let costOfBig = a / area(+prompt(`Диаметр большой пиццы`));
    let costOfSmall = b / area(+prompt(`Диаметр маленькой пиццы`));
    return (costOfBig < costOfSmall) ? `Выгоднее заказать 32см` : `Выгоднее заказать 25см`

}


alert( pizza(+prompt(`Стоимость большой пиццы`), +prompt(`Стоимость маленькой пиццы`)) );


