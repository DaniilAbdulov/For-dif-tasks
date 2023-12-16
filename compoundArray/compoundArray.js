function compoundArray(a, b) {
    const newArr = [];
    const bigArr = a.length > b.length ? a : b;
    const smallArr = bigArr === a ? b : a;
    const otherValues = bigArr.splice(smallArr.length);
    for (let i = 0; i < smallArr.length; i++) {
        const first = a[i];
        const second = b[i];
        newArr.push(first);
        newArr.push(second);
    }
    newArr.push(...otherValues);
    return newArr;
}

const res = compoundArray([11, 12], [21, 22, 23, 24]);
console.log(res);
// module.exports = compoundArray;
