function validateBet(game, text) {
    function checkNumbers(text) {
        for (let i = 0; i < text.length; i++) {
            let elem = text[i];
            console.log(isFinite(elem));
        }
    }
    checkNumbers(text);
}

console.log(validateBet([5, 90], '1 2 3 4 5'));
