/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {

    var arr = s.split("");

    removeExtraSpace(arr);

    console.log(arr);

    reverse(arr, 0, arr.length);

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

reverseWords("  hello world  ");