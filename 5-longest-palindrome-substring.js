const longestPalindrome = function (s) {
    if (!s || s.length < 1) return "";
    let left, right, start, end;
    let maxLen1 = 0;
    let maxLen2 = 0;
    for (let i = 0; i < s.length; i++) {
        // Even Palindrome
        left = i;
        right = i;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        let len = right - left - 1;
        if (maxLen1 < len) {
            maxLen1 = len;
        }
        if (len === maxLen1 && maxLen1 > maxLen2) {
            start = i - Math.floor((maxLen1 - 1) / 2);
            end = i + Math.floor(maxLen1 / 2);
        }
        // Odd Palindrome
        left = i;
        right = i + 1;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            right++;
            left--;
        }
        len = right - left - 1;
        if (len > maxLen2) {
            maxLen2 = len;
        }
        if (len === maxLen2 && maxLen2 > maxLen1) {
            start = i - Math.floor((maxLen2 - 1) / 2);
            end = i + Math.floor(maxLen2 / 2);
        }
    }
    return s.substring(start, end + 1);
};
console.log(longestPalindrome("cbbd"));