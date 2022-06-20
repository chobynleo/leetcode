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
var sortedArrayToBST = function(nums) {
    
    var buildTree = function(arr, left, right) {
        if(left > right) return null;

        var midIndex = Math.floor((left + right) / 2);
        var root = new TreeNode(arr[midIndex]);

        root.left = buildTree(arr, left, midIndex - 1);
        root.right = buildTree(arr, midIndex + 1, right);

        return root;
    }
    
    return buildTree(nums, 0, nums.length - 1)
};

var sortedArrayToBST = function(nums) {
    if(!nums.length) return null;

    var root = new TreeNode(0), midIndex, leftIndex, rightIndex;
    var nodeStack = [root], leftStack = [0], rightStack = [nums.length - 1];

    while(nodeStack.length) {
        node = nodeStack.pop();
        leftIndex = leftStack.pop();
        rightIndex = rightStack.pop();
        
        midIndex = Math.floor(leftIndex + (rightIndex - leftIndex) / 2);
        node.val = nums[midIndex];

        if(leftIndex <= (midIndex - 1)) {
            node.left = new TreeNode(0);
            nodeStack.push(node.left);
            leftStack.push(leftIndex);
            rightStack.push(midIndex - 1);
        }

        if(rightIndex >= (midIndex + 1)) {
            node.right = new TreeNode(0);
            nodeStack.push(node.right);
            leftStack.push(midIndex + 1);
            rightStack.push(rightIndex);
        }
    }

    return root;
};