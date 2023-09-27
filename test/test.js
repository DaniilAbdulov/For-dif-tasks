const formatWhatTimeAgo = require("../changeValuesOfLanguages");

test("This function should return time ago", () => {
    const now = new Date();

    const oneMinuteAgo = new Date(now.getTime() - 60 * 1000);
    const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
    const oneDayAgo = new Date(now.getTime() - 7 * 60 * 60 * 1000);
    const oneWeekAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);
    const oneMonthAgo = new Date(now);
    oneMonthAgo.setMonth(now.getMonth() - 1);

    const oneYearAgo = new Date(now);
    oneYearAgo.setFullYear(now.getFullYear() - 1);

    const twoYearAgo = new Date(now);
    twoYearAgo.setFullYear(now.getFullYear() - 2);

    expect(formatWhatTimeAgo(now, oneMinuteAgo.toISOString())).toBe(
        "1 minute ago"
    );
    expect(formatWhatTimeAgo(now, oneHourAgo.toISOString())).toBe("1 hour ago");
    expect(formatWhatTimeAgo(now, oneDayAgo.toISOString())).toBe("1 day ago");
    expect(formatWhatTimeAgo(now, oneWeekAgo.toISOString())).toBe(
        "2 weeks ago"
    );
    expect(formatWhatTimeAgo(now, oneMonthAgo.toISOString())).toBe(
        "1 month ago"
    );
    expect(formatWhatTimeAgo(now, oneYearAgo.toISOString())).toBe("1 year ago");
    expect(formatWhatTimeAgo(now, twoYearAgo.toISOString())).toBe(
        "2 years ago"
    );
});

// const obj = {
//     0: now,
//     1: oneMinuteAgo,
//     2: oneHourAgo,
//     3: oneDayAgo,
//     4: oneWeekAgo,
//     5: oneMonthAgo,
//     6: oneYearAgo,
//     7: twoYearAgo,
// };
// console.log(obj);

// console.log(formatWhatTimeAgo(now, oneMinuteAgo.toISOString()));
// console.log(formatWhatTimeAgo(now, oneHourAgo.toISOString()));
// console.log(formatWhatTimeAgo(now, oneDayAgo.toISOString()));
// console.log(formatWhatTimeAgo(now, oneWeekAgo.toISOString()));
// console.log(formatWhatTimeAgo(now, oneMonthAgo.toISOString()));
// console.log(formatWhatTimeAgo(now, oneYearAgo.toISOString()));
// console.log(formatWhatTimeAgo(now, twoYearAgo.toISOString()));
