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
var levelOrderBottom = function(root) {
    var res = [], queue = [];

    if(!root) return res;

    queue.push(root);

    while(queue.length) {
        var temp = [];
        var len = queue.length;

        for (let i = 0; i < len; i++) {
            var node = queue.shift();
            temp.push(node.val)

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }

        res.unshift(temp)
    }

    return res;
};