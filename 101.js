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
 * @return {boolean}
 */

var compare = function(left, right) {
    // 先判断终止条件
    if(left == null && right != null) return false;
    if(left != null && right == null) return false;
    if(left == null && right == null) return true;
    if(left.val !== right.val) return false;

    // 如果都有小孩

    return compare(left.left, right.right) && compare(left.right, right.left);
}
// 递归法
var isSymmetric = function(root) {
    if(!root) return true;

    return compare(root.left, root.right)
};

// 迭代法
var isSymmetric = function(root) {
    if(!root) return true;

    var queue = [];
    queue.push(root.left, root.right);

    while(queue.length) {
        var left = queue.shift();
        var right = queue.shift();

        // 这个不能return true，有坑，所以建议用递归
        if(left == null && right == null) continue;

        // 先判断终止条件
        if(left == null && right != null) return false;
        if(left != null && right == null) return false;
        
        if(left.val !== right.val) return false;

        // 如果都有小孩

        queue.push(left.left);
        queue.push(right.right);
        queue.push(left.right);
        queue.push(right.left);
    }

    return true;

};