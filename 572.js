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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

// 通过递归的方式去判断pq二树是否相等
var isEqual = function(p, q) {

    if(p == null && q != null) return false;
    if(p != null && q == null) return false;
    if(p == null && q == null) return true;
    if(p.val != q.val) return false;

    // 如果有小孩
    return isEqual(p.left, q.left) && isEqual(p.right, q.right)
}


var isSubtree = function(root, subRoot) {

    // 遍历root树，寻找子树
    var dfs = function(root) {

        if(root == null) return false;
        
        if(isEqual(root, subRoot)) return true;

        return dfs(root.left) || dfs(root.right);
    }

    if(dfs(root)) return true;
    
    return false;
};