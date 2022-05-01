/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// Map 解法
var canConstruct = function(ransomNote, magazine) {
    let map = new Map();
    for (const temp of magazine) {
        map.set(temp, (map.get(temp) || 0) + 1);
    }
    
    for (const temp of ransomNote) {
        let value = map.get(temp);
        if(!map.get(temp)) return false;
        value--;
        map.set(temp, value);
    }
    return true;
};

var canConstruct = function(ransomNote, magazine) {
    // Array解法，以空间换时间
    // 因为map底层要维护红黑树或哈希表，还要执行哈希函数，数据量大的情况下效率低
    let arr = new Array(26).fill(0);
    let base = 'a'.charCodeAt();

    for (const temp of magazine) {
        arr[temp.charCodeAt() - base]++;
    }

    for (const temp of ransomNote) {
        if(!arr[temp.charCodeAt() - base]) return false;
        arr[temp.charCodeAt() - base]--
    }
    return true;
};
