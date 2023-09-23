function getDataAboutFavoriteLanguages(langArray) {
    function sumValues(data) {
        let total = 0;
        for (const lang of data) {
            total += lang[1];
        }
        return total;
    }
    const totalCount = sumValues(langArray);
    function mergeAndSumRepeatedKeys(data, totalCount) {
        const mergedData = {};

        for (const lang of data) {
            if (mergedData.hasOwnProperty(lang[0])) {
                mergedData[lang[0]] += lang[1] / totalCount;
            } else {
                mergedData[lang[0]] = lang[1] / totalCount;
            }
        }

        return mergedData;
    }
    const resultObject = mergeAndSumRepeatedKeys(langArray, totalCount);
    return resultObject;
}

const result = getDataAboutFavoriteLanguages([
    ["JavaScript", 20487],
    ["Vue", 9428],
    ["SCSS", 972],
    ["HTML", 943],
    ["HTML", 18051],
    ["SCSS", 15992],
    ["CSS", 14438],
]);

console.log(result);
