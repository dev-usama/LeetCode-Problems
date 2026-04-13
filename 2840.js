var checkStrings = function (s1, s2) {
    let i = 0;
    let temp1 = s1.split('');
    let temp2 = s2.split('');
    let tempChar;
    let j=0;
    let size = s1.length;
    while (i + 2 < size) {
        j += 2;
        tempChar = temp1[i];
        temp1[i] = temp1[j];
        temp1[j] = tempChar;
        if (temp1[i] !== s2[i]) {
            i++;
            continue;
        }
        i += 2;
        if (i + 2 >= size && j < size - 1) {
            let z = 1;
            j++;
            tempChar = temp1[z];
            temp1[z] = temp1[j];
            temp1[j] = tempChar;
        }
    }
    if (temp1.join('') === s2) {
        return true;
    }
    i = 0;
    j = 0;
    while (i + 2 < size) {
        j += 2;
        tempChar = temp2[i];
        temp2[i] = temp2[j];
        temp2[j] = tempChar;
        if (temp2[i] !== s2[i]) {
            i++;
            continue;
        }
        i += 2;
        if (i + 2 >= size && j < size - 1) {
            let z = 1;
            j++;
            tempChar = temp2[z];
            temp2[z] = temp2[j];
            temp2[j] = tempChar;
        }
    }
    if (temp2.join('') === s1) {
        return true;
    }
    return false
};
console.log(checkStrings("abcdba", "cabdab"))



const longestPalindrome = function(s) {
    if (!s || s.length < 1) return "";    
    let start = 0;
    let end = 0;
    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(s, i, i);
        const len2 = expandAroundCenter(s, i, i + 1);
        const maxLen = Math.max(len1, len2);
        if (maxLen > end - start) {
            start = i - Math.floor((maxLen - 1) / 2);
            end = i + Math.floor(maxLen / 2);
        }
    }
    return s.substring(start, end + 1);
};
const expandAroundCenter = function(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
};
