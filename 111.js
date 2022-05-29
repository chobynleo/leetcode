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
var minDepth = function(root) {
    var depth = 0, queue = [];

    if(!root) return depth;

    queue.push(root);

    while(queue.length) {
        depth++;

        var len = queue.length;

        for (let i = 0; i < len; i++) {
            var node = queue.shift();

            if(!node.left && !node.right) return depth;
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        
    }

    return depth;
};