/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var reverseStr = function(s, k) {
    let arr = s.split("");
    let len = arr.length;

   for (let i = 0; i < len; i+=2*k) { // i想象成下标，i+=2*k内的都是被处理好的
       let l = i-1, r = i+k > len? len : i+k;
       while(++l < --r) [arr[l], arr[r]] = [arr[r], arr[l]];
   }

    return arr.join("");
};
