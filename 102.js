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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var res = [];

    if (!root) return res;

    var stack = [root];

    while (stack.length) {
        var len = stack.length;
        var cur = []
        for (var i = 0; i < len; i++) {
            var node = stack.shift();
            cur.push(node.val);
            if (node.left) stack.push(node.left);
            if (node.right) stack.push(node.right);
        }

        res.push(cur);
    }

    return res;
};