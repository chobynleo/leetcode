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
        
        // 中 知道depth，等同于先处理 node.val,这里只是对每一个节点进行标记，标记深度而已
        var nextDepth = depth + 1;

        // 左
        if(node.left) getDepth(node.left, nextDepth);
        // 右
        if(node.right) getDepth(node.right, nextDepth);
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

// 迭代法 - 前序遍历
var maxDepth = function(root) {
    // 全局的最大深度结果
    var maxDepthResult = 0;
    
    if(!root) return maxDepthResult;

    var stack = [root], depth = [1];

    while(stack.length) {
        var node = stack.pop();
        var curDepth = depth.pop();
        if(node) {
            if(node.right) {
                stack.push(node.right);
                depth.push(curDepth + 1);
            }
            if(node.left) {
                stack.push(node.left);
                depth.push(curDepth + 1);
            }
            stack.push(node);
            stack.push(null);
            depth.push(curDepth);
        } else {
            stack.pop();
            if(maxDepthResult < curDepth) maxDepthResult = curDepth;
        }
    }

    return maxDepthResult;
};

// 迭代法 - 后序遍历
var maxDepth = function(root) {
    // 全局的最大深度结果
    var maxDepthResult = 0;
    
    if(!root) return maxDepthResult;

    var stack = [root];

    var getDepth = function(root) {
        if(!root) return 1;

        return root.depth;
    }

    while(stack.length) {
        var node = stack.pop();
        if(node) {
            stack.push(node);
            stack.push(null);
            if(node.right) {
                stack.push(node.right);
            }
            if(node.left) {
                stack.push(node.left);
            }
        } else {
            var node = stack.pop();
            var curLeftDepth = getDepth(node.left);
            var curRightDepth = getDepth(node.right);

            var curDepth = Math.max(curLeftDepth, curRightDepth);
            node.depth = 1 + curDepth;
            if(maxDepthResult < curDepth) maxDepthResult = curDepth;
        }
    }

    return maxDepthResult;
};
