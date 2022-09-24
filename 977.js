// 有序数组的平方
var sortedSquares = function(nums) {
    var len = nums.length;
    var newArr = new Array(len).fill(0);
    var i = 0, j = len - 1, k = len - 1;

    while (i <= j) {
        var left = nums[i] * nums[i];
        var right = nums[j] * nums[j];

        if (left < right) {
            newArr[k] = right;
            k--;
            j--;
        } else {
            newArr[k] = left;
            k--;
            i++;
        }
    }

    return newArr
};

var sortedSquares = function(nums) {
    var left = 0, right = nums.length - 1, result = [];

    for (let i = 0; i < nums.length; i++) {
        if(nums[left] * nums[left] > nums[right] * nums[right]) {
            result.unshift(nums[left] * nums[left]);
            left++;
        } else {
            result.unshift(nums[right] * nums[right]);
            right--;
        }
    }

    return result;
};