// 字母异位词
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if(s.length != t.length) return false
    let arr = new Array(26).fill(0)
    let a = "a".charCodeAt()
    for(let i of s){
        arr[ i.charCodeAt() - a]++
    }
    for(let i of t){
        arr[ i.charCodeAt() - a]--
    }
    for(let i of arr){
        console.log(i)
        if(i != 0) return false
    }
    return true
};

var isAnagram2 = function(s, t) {
    if(s.length !== t.length) return false;
    const resSet = new Array(26).fill(0);
    const base = "a".charCodeAt();
    for(const i of s) {
        resSet[i.charCodeAt() - base]++;
    }
    console.log(resSet)
    for(const i of t) {
        console.log(!resSet[i.charCodeAt() - base])
        if(!resSet[i.charCodeAt() - base]) return false;
        resSet[i.charCodeAt() - base]--;
    }
    return true;
};
let s = "anagram", t = "nagaram" ;
console.log(isAnagram(s, t))