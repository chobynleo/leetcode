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
 var postorderTraversal = function(root) {
    var res = [];

    var traversal = function(root, res) {
        if(root == null) return;

        traversal(root.left, res);
        traversal(root.right, res);
        res.push(root.val)
    }

    traversal(root, res)

    return res;
};