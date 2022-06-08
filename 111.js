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

// 递归法-深度优先遍历-前序遍历
var minDepth = function(root) {
    if(!root) return 0;

    // 全局的最小深度结果
    var minDepthResult = 100000000;

    // 先创建一个递归函数
    var getDepth = function(node, depth) {
        
        // 中 等同于先处理 node.val,这里只是对每一个节点进行标记，标记深度而已
        if(!node.left && !node.right) {
            if(depth < minDepthResult) minDepthResult = depth;
        }

        var nextDepth = depth + 1;

        // 左
        if(node.left) getDepth(node.left, nextDepth);

        // 右
        if(node.right) getDepth(node.right, nextDepth);

    }

    getDepth(root, 1);

    return minDepthResult;
};

// 递归法-深度优先遍历-后序遍历
var minDepth = function(root) {

    if(!root) return 0;

    // 左
    var leftMinDepth = minDepth(root.left);
    // 右
    var rightMinDepth = minDepth(root.right);

    if(!root.left && root.right) {
        return 1 + rightMinDepth
    }

    if(!root.right && root.left) {
        return 1 + leftMinDepth
    }
    
    // 中
    var childMinDepth = Math.min(leftMinDepth, rightMinDepth);
    
    return 1 + childMinDepth;
};

// 迭代法-广度优先遍历-层次遍历
var minDepth = function(root) {
    var depth = 0, queue = [];

    if(!root) return depth;

    queue.push(root);

    while(queue.length) {
        depth++;

        var len = queue.length;

        for (let i = 0; i < len; i++) {
            var node = queue.shift();

            if(!node.left && !node.right) return depth;
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        
    }

    return depth;
};