/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    var res = [], path = [];

    var backTracking = function(start) {
        if(path.length > 4) return;
        if(start == s.length && path.length == 4) {
            res.push(path.join('.'));
            return;
        }

        for (let i = start; i < s.length; i++) {
            if(i - start > 2) break;
            var str = s.slice(start, i + 1);
            if(str > 255 || (str.length > 1 && str[0] == "0")) break;
            console.log(str);
            path.push(str);
            backTracking(i + 1);
            path.pop();
        }
    }

    backTracking(0);

    return res;
};