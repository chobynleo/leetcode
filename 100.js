/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var compare = function(left, right) {

    if(left == null && right != null) return false;
    if(left != null && right == null) return false;
    if(left == null && right ==null) return true;
    if(left.val != right.val) return false;

    // 如果有小孩
    return compare(left.left, right.left) && compare(left.right, right.right);
}
var isSameTree = function(p, q) {
    
    return compare(p, q);
};