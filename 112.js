/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
// 递归法-前序遍历
var hasPathSum = function(root, targetSum) {

    var dfs = function(node, sum) {
        if(!node) return false;

        var currentSum = node.val + sum;
        if(currentSum == targetSum && !node.left && !node.right) return true;

        return dfs(node.left, currentSum) || dfs(node.right, currentSum);
    }

    return dfs(root, 0);
};

// 迭代法-前序遍历
var hasPathSum = function(root, targetSum) {
    if(!root) return false;

    var currentSumArr = [0], stack = [root];

    while(stack.length) {
        var node = stack.pop();
        var currentSum = currentSumArr.pop();

        currentSum += node.val;

        if(currentSum == targetSum && !node.left && !node.right) return true;

        if(node.left) {
            stack.push(node.left);
            currentSumArr.push(currentSum);
        }
        if(node.right) {
            stack.push(node.right);
            currentSumArr.push(currentSum);
        }
    }

    return false;
};