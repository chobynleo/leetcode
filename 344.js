/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    let len = s.length;
    if(len < 2) return s;
    let l = 0, r = len -1, temp;
    while(l < r) {
        temp = s[l];
        s[l] = s[r];
        s[r] = temp;
        l++, r--;
    }
};

var reverseString = function(s) {
    return s.reverse();
};

var reverseString = function(s) {
    let l = -1, r = s.length;
    while(++l < --r) [s[l], s[r]] = [s[r], s[l]];
    return s;
};