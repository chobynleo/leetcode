/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    var queue = [];

    if(!root) return root;

    queue.push(root);

    while(queue.length) {
        var len = queue.length;

        for (let i = 0; i < len; i++) {
            var head = queue.shift();
            
            if(i < len - 1) {
                head.next = queue[0];
            }
            
            if(head.left) queue.push(head.left);
            if(head.right) queue.push(head.right);
        }

    }

    return root;
};