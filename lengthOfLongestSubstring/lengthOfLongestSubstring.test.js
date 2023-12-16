const lengthOfLongestSubstring = require("./lengthOfLongestSubstring");

test("check", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
    expect(lengthOfLongestSubstring("")).toBe(0);
    expect(lengthOfLongestSubstring(" ")).toBe(1);
    expect(lengthOfLongestSubstring("c")).toBe(1);
    expect(lengthOfLongestSubstring("au")).toBe(2);
    expect(lengthOfLongestSubstring("aab")).toBe(2);
});
