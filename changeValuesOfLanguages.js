function changeValuesOfLanguages(val) {
    const sumOfValues = Object.values(val).reduce((a, b) => a + b, 0);
    const arr = Object.entries(val);
    const newArr = [];
    for (let i of arr) {
        newArr.push([i[0], ((i[1] / sumOfValues) * 100).toFixed(2) + " %"]);
    }
    return Object.fromEntries(newArr);
}

const result = changeValuesOfLanguages({
    HTML: 36739,
    CSS: 26266,
    SCSS: 25803,
    JavaScript: 9366,
    PHP: 3496,
});
console.log(result);
