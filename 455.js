/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
// 从小开始喂
var findContentChildren = function(g, s) {
    var count = 0, j = 0;

    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    for (let i = 0; i < s.length; i++) {
        if(s[i] >= g[j] && j < g.length) {
            j++;
        }
        if(j == g.length) break;
    }

    return j;
};

// 我的初始解法 双循环
var findContentChildren = function(g, s) {
    var count = 0, j = 0;

    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    for (let i = 0; i < g.length; i++) {
        while(s[j] < g[i] && j < s.length) {
            j++;
        }
        if(j == s.length) break;

        j++;
        count++;
    }

    return count;
};

console.log(findContentChildren([1,2], [1,2,3]));