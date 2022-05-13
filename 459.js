/**
 * @param {string} s
 * @return {boolean}
 */
 var repeatedSubstringPattern = function(s) {
    if(s.length == 0) return false;
    
    const getNext = (s) => {
        let next = [];
        let j = 0;
        next.push(j)
        for (let i = 1; i < s.length; i++) {
            while(j > 0 && s[j] != s[i]) {
                j = next[j-1];
            }
            if(s[j] == s[i]) j++;
            next.push(j);
        }
        return next;
    }

    let next = getNext(s);

    let last = next[next.length - 1];
    if(last != 0 && last % (s.length - last) == 0) {
        return true
    }
    return false;
};