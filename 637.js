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
var averageOfLevels = function(root) {
    var res = [], queue = [];

    if(!root) return res;

    queue.push(root);

    while(queue.length) {
        var average = 0;
        var len = queue.length;

        for (let i = 0; i < len; i++) {
            var node = queue.shift();
            average += node.val;

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }

        average /= len;

        res.push(average);
    }

    return res;
};