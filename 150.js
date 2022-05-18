/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
    var map = {
        "+": (a, b) => a * 1 + b * 1,
        "-": (a, b) => a - b,
        "/": (a, b) => parseInt(a / b),
        "*": (a, b) => a * b,
    }
    var stack = []
    for (const x of tokens) {
        if(x in map) {
            var f = map[x];
            var b = stack.pop();
            var a = stack.pop();
            var c = f(a, b);
            stack.push(c);
            continue;
        }
        stack.push(x);
    }
    return stack.pop();
};
