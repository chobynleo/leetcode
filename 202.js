/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    
    var sumSet = new Set()
    return iter(n, sumSet)

};

var iter = function (n, sumSet){
    var temp = Array.from(String(n))
    var tempSum = 0

    for (let i = 0; i < temp.length; i++) {
        tempSum += temp[i] * temp[i]
    }
    if(tempSum == 1) return true;

    if(sumSet.has(tempSum))return false;

    sumSet.add(tempSum)
    return iter(tempSum, sumSet)
}
