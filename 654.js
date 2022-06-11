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