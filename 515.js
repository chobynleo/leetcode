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
var largestValues = function(root) {
    var res = [], queue = [];

    if(!root) return res;

    queue.push(root);

    while(queue.length) {
        var len = queue.length;
        var max = 0;

        for (let i = 0; i < len; i++) {
            var node = queue.shift();
            
            if(i == 0) max = node.val;
            if(max < node.val) max = node.val;

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }

        res.push(max);
    }

    return res;
};