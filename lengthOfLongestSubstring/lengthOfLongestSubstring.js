function lengthOfLongestSubstring(s) {
    if (!s || s.length === 0) {
        return 0;
    }

    const set = new Set();
    let maxLength = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        while (set.has(char)) {
            set.delete(s[left]);
            left++;
        }

        set.add(char);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}
// const res = lengthOfLongestSubstring("au");
// console.log(res);
module.exports = lengthOfLongestSubstring;
