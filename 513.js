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

// 递归法-前序遍历
var findBottomLeftValue = function(root) {
    var value = root.val, maxLevel = 1;

    var dfs = function(node, level) {
        if(level > maxLevel) { // 中
            maxLevel = level;
            value = node.val; 
        }
        level++;

        if(node.left) dfs(node.left, level); // 左
        if(node.right) dfs(node.right, level); // 右
    }

    dfs(root, maxLevel);

    return value;
};

// 递归法-层序遍历
var findBottomLeftValue = function(root) {
    var value = root.val, queue = [root];

    while(queue.length) {
        var len = queue.length;

        value = queue[0].val;
        for (let i = 0; i < len; i++) {
            var node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }

    return value;
};