/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// todo
 var strStr = function(haystack, needle) {
    if(needle.length == 0) return 0;
    
    const getNext = (needle) => {
        let next = [];
        let j = 0;
        next.push(j);
        for (let i = 1; i < needle.length; i++) {
            // 只有两种情况，needle[i] != needle[j] or needle[i] == needle[j]
            // needle[i] != needle[j]时，比较难想象代码怎么做
            // 其实主要时想思路怎么去匹配，j退一步(j-1)
            // 找next的j-1集合中的最大相等前后缀，然后找到needle[j]去跟needle[i]匹配
            // 还是见图28.jpg
            while(j > 0 && needle[i] !== needle[j]) j = next[j-1];

            // needle[i] == needle[j]好处理 j++即可
            if(needle[i] == needle[j]) j++;
            next.push(j); 
        }
        return next;
    }

    let next = getNext(needle);
    let j = 0;
    for (let i = 0; i < haystack.length; i++) {
        // 跟模式串去匹配，相等就++，不相等就回退
        while(j > 0 && haystack[i] != needle[j]) j = next[j-1];
        if(haystack[i] == needle[j]) j++;
        if(j == needle.length) return i - needle.length + 1;
    }

    return -1;
};