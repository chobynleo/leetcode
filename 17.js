/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var res = [], path = [];
    const map = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];

    if(!digits.length) return res;
    
    var backTracking = function() {
        if(path.length == digits.length) {
            res.push(path.join(''));
            return;
        }

        var curNumber = path.length;
        var str = map[digits[curNumber]];
        
        for (const i of str) {
            path.push(i);
            backTracking();
            path.pop();
        }
    }

    backTracking();
    return res;
};