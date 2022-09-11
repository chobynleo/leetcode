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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    var maxLength = 0

    var dfs = function(root) {
        if(!root) return 0

        var leftHeight = dfs(root.left)
        var rightHeight = dfs(root.right)

        if(leftHeight + rightHeight > maxLength) maxLength = leftHeight + rightHeight

        return 1 + Math.max(leftHeight, rightHeight)
    }

    dfs(root)

    return maxLength
};