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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    if(!root) return [];

    var res = [];

    var dfs = function(node, sum, pathArr) {
        var currentSum = node.val + sum;
        var currentPath = pathArr.concat(node.val);

        // 中
        if(currentSum == targetSum && !node.left && !node.right) res.push(currentPath);

        // 左
        if(node.left) dfs(node.left, currentSum, currentPath);

        // 右
        if(node.right) dfs(node.right, currentSum, currentPath);
    }

    dfs(root, 0, []);

    return res;
};