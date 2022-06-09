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

// 递归法-标记法-前序遍历
var sumOfLeftLeaves = function(root) {
    var sum = 0;

    var dfs = function(node, isLeft) {
        if(!node) return;
    
        if(isLeft && !node.left && !node.right) sum += node.val; // 中

        if(node.left) dfs(node.left, true); // 左
        if(node.right) dfs(node.right, false); // 右
    }

    dfs(root, false);

    return sum;
};

// 迭代法-无需标记-前序遍历
var sumOfLeftLeaves = function(root) {
    var sum = 0, stack = [];

    stack.push(root);
    
    while(stack.length) {
        var node = stack.pop();

        if(node.left && !node.left.left && !node.left.right) sum += node.left.val;

        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);
    }

    return sum;
};