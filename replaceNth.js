export function replaceNth(text, n, oldValue, newValue) {
    const regex = new RegExp(oldValue, "g");
    let count = 0;

    return text.replace(regex, (match) => {
        count++;
        if (count % n === 0) {
            return newValue;
        }
        return match;
    });
}
