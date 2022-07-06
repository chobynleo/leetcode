/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    var res= [], path = [];
    var isPalindrome = function(s, l, r) {
        while(l < r) {
            if(s[l] != s[r]) return false;
            l++;
            r--;
        }
        return true;
    }
    var backTracking = function(start){
        if(start == s.length) {
            res.push([...path]);
            return;
        }

        for (let i = start; i < s.length; i++) {
            if(!isPalindrome(s, start, i)) continue;
            path.push(s.slice(start, i + 1));
            backTracking(i + 1);
            path.pop();
        }
    }

    backTracking(0);

    return res;
};

console.log(partition('aab'));