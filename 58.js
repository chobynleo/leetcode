/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
 var reverseLeftWords = function(s, n) {
    var arr = s.split("");
    var len = arr.length;
    reverse(arr, 0, len-1)
    reverse(arr, 0, len-n-1);
    reverse(arr, len-n, len-1)
    return arr.join("")
};

var reverse = function(arr, start, end) {
    var l = start, r = end;
    while(l<r) {
        [arr[l], arr[r]] = [arr[r], arr[l]]
        l++;
        r--;
    }
}