/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {

    var arr = s.split("");

    // 删除数组某元素
    removeExtraSpace(arr);

    // 倒转数组
    reverse(arr, 0, arr.length - 1);

    var start = 0;
    for (let i = 0; i <= arr.length; i++) {
        if(arr[i] === " " || i == arr.length) {
            reverse(arr, start, i-1);
            start = i+1;
        }
    }

    return arr.join("");

};

var removeExtraSpace = function(arr) {

    var slow = 0, fast = 0;
    while(fast < arr.length) {
        if((fast === 0 || arr[fast-1] === " ") && arr[fast] === " ") {
            fast++
        } else {
            arr[slow++] = arr[fast++];
        }
    }

    arr.length = arr[slow-1] === " "? slow-1 : slow; 
}

var reverse = function(arr, start, end) {
    var l = start, r = end;

    while(l<r) {
        [arr[l], arr[r]] = [arr[r], arr[l]]
        l++;
        r--;
    }
}