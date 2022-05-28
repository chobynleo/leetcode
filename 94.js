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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var res = [];

    var traversal = function(root, res) {
        if(root == null) return;

        traversal(root.left, res);
        res.push(root.val)
        traversal(root.right, res)
    }

    traversal(root, res)

    return res;
};