/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    var stack = [];
    
    var map = {
        "[": "]",
        "{": "}",
        "(": ")"
    }
    for (const x of s) {
        if(x in map) {
            stack.push(x);
            continue;
        }
        
        if(map[stack.pop()] != x) return false;
    }
    return !stack.length;
};