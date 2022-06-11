/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// 官方解法
var constructMaximumBinaryTree = function (nums) {
    const BuildTree = (arr, left, right) => {
        if (left > right)
            return null;
        let maxValue = -1;
        let maxIndex = -1;
        for (let i = left; i <= right; ++i) {
            if (arr[i] > maxValue) {
                maxValue = arr[i];
                maxIndex = i;
            }
        }
        let root = new TreeNode(maxValue);
        root.left = BuildTree(arr, left, maxIndex - 1);
        root.right = BuildTree(arr, maxIndex + 1, right);
        return root;
    }
    let root = BuildTree(nums, 0, nums.length - 1);
    return root;
};

// 我的解法
var getMax = function(nums) {
    var max = -1, maxIndex;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] > max) {
            max = nums[i];
            maxIndex = i;
        }
    }
    return maxIndex;
}
var constructMaximumBinaryTree = function(nums) {
    if(!nums.length) return null;

    var midIndex = getMax(nums);

    var midNode = new TreeNode(nums[midIndex]);

    var leftArr = nums.slice(0, midIndex);
    var rightArr = nums.slice(midIndex + 1, nums.length)

    midNode.left = constructMaximumBinaryTree(leftArr);
    midNode.right = constructMaximumBinaryTree(rightArr);
    
    return midNode;
};