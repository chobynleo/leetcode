/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var res = [], queue = [];

    if(!root) return res;

    queue.push(root);

    while(queue.length) {
        var len = queue.length;
        var curLevel = [];

        for (let i = 0; i < len; i++) {
            var node = queue.shift();
            
            curLevel.push(node.val);

            var childLen = node.children.length;

            for (let j = 0; j < childLen; j++) {
                queue.push(node.children[j]);
            }
        }

        res.push(curLevel);
    }

    return res;
};