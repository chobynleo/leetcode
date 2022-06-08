/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @dev 后序遍历
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0;

    // 左
    var leftMaxDepth = maxDepth(root.left);
    // 右
    var rightMaxDepth = maxDepth(root.right);
    // 中
    var childMaxDepth = Math.max(leftMaxDepth, rightMaxDepth);
    
    return 1 + childMaxDepth;
};

/**
 * @dev 前序遍历
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
    // 全局的最大深度结果
    var maxDepthResult = 0;
    // 先创建一个递归函数
    var getDepth = function(node, depth) {
        
        // 这条表达式只要放在getDepth函数的return语句前任何一个地方都成立
        maxDepthResult = depth > maxDepthResult? depth : maxDepthResult; // 这个不是中哈，这个表达式放在左右后面一样成立
        
        // 中 知道depth，等同于先处理 node.val
        var nextDepth = depth + 1;

        // 左
        if(node.left) getDepth(node.left, nextDepth);
        // 右
        if(node.right) getDepth(node.right, nextDepth);

        return ;
    }

    if(!root) return maxDepthResult;
    getDepth(root, 1);
    return maxDepthResult;
};

/**
 * @dev 层序遍历
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    var depth = 0, queue = [];

    if(!root) return depth;

    queue.push(root);

    while(queue.length) {
        var len = queue.length;

        for (let i = 0; i < len; i++) {
            var node = queue.shift();

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }

        depth++;
    }

    return depth;
};