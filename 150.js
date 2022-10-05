/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
    var map = new Map();
    map.set("+", (a, b) => a * 1 + b * 1);
    map.set("-", (a, b) => a * 1 - b * 1);
    map.set("*", (a, b) => a * b);
    map.set("/", (a, b) => parseInt(a / b));

    var stack = [];

    for (var x of tokens) {
        if (map.has(x)) {
            var f = map.get(x);
            var b = stack.pop();
            var a = stack.pop();
            var c = f(a, b);
            stack.push(c);
        } else {
            stack.push(x);
        }
    }

    return stack.pop();
};
