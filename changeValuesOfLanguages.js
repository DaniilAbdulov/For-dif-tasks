function formatWhatTimeAgo(n, v) {
    const difference = Date.parse(n) - Date.parse(v);

    if (difference < 60000) {
        return "now";
    } else if (difference < 3600000) {
        const minutes = Math.floor(difference / 60000);
        return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    } else if (difference < 86400000) {
        const hours = Math.floor(difference / 3600000);
        return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    } else if (difference < 604800000) {
        const days = Math.floor(difference / 86400000);
        return `${days} ${days === 1 ? "day" : "days"} ago`;
    } else if (difference < 2678400000) {
        const weeks = Math.floor(difference / 604800000);
        return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
    } else if (difference < 31536000000) {
        const months = Math.floor(difference / 2678400000);
        return `${months} ${months === 1 ? "month" : "months"} ago`;
    } else if (difference > 31536000000) {
        const years = Math.floor(difference / 31536000000);
        return `${years} ${years === 1 ? "year" : "years"} ago`;
    }
}

const now = new Date();

const oneMinuteAgo = new Date(now.getTime() - 60 * 1000);
const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
const oneMonthAgo = new Date(now);
oneMonthAgo.setMonth(now.getMonth() - 1);
const oneYearAgo = new Date(now);
oneYearAgo.setFullYear(now.getFullYear() - 1);
const twoYearAgo = new Date(now);
twoYearAgo.setFullYear(now.getFullYear() - 3);

console.log(formatWhatTimeAgo(now, oneMinuteAgo.toISOString()));
console.log(formatWhatTimeAgo(now, oneHourAgo.toISOString()));
console.log(formatWhatTimeAgo(now, oneDayAgo.toISOString()));
console.log(formatWhatTimeAgo(now, oneWeekAgo.toISOString()));
console.log(formatWhatTimeAgo(now, oneMonthAgo.toISOString()));
console.log(formatWhatTimeAgo(now, oneYearAgo.toISOString()));
console.log(formatWhatTimeAgo(now, twoYearAgo.toISOString()));
