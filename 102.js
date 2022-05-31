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
    var res = [], queue = [];

    if(root == null) return res;

    queue.push(root);

    while(queue.length) {
        var curLevel = [];
        var len = queue.length;
        for (let i = 0; i < len; i++) {
            curLevel.push(queue[0].val);
            if(queue[0].left) queue.push(queue[0].left);
            if(queue[0].right) queue.push(queue[0].right);
            queue.shift();
        }
        res.push(curLevel)
    }

    return res;
};