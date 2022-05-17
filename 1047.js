/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicates = function(s) {
    var stack = [];
    for (const x of s) {
        var temp = null;
        if(stack.length && x === (temp = stack.pop())) continue;
        temp && stack.push(temp);
        stack.push(x);
    }
    return stack.join("")
};