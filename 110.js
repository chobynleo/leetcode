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

// 官方递归法
var isBalanced = function(root) {
    // 1. 确定递归函数参数以及返回值
    const getDepth = function(node) {
        // 2. 确定递归函数终止条件
        if(!node) return 0;
        // 3. 确定单层递归逻辑
        let leftDepth = getDepth(node.left); // 左子树高度
        // 当判定左子树不为平衡二叉树时,即可直接返回-1
        if(leftDepth === -1) return -1;

        let rightDepth = getDepth(node.right); // 右子树高度
        // 当判定右子树不为平衡二叉树时,即可直接返回-1
        if(rightDepth === -1) return -1;

        if(Math.abs(leftDepth - rightDepth) > 1) {
            return -1;
        } else {
            return 1 + Math.max(leftDepth, rightDepth);
        }
    }

    return (getDepth(root) !== -1);
};

// 我的递归法
var isBalanced = function(root) {
    var isBalancedResult = true;
    if(!root) return isBalancedResult;

    var dfs = function(node) {
        if(!node) return 0;
        
        var leftNum = dfs(node.left);
        var rightNum = dfs(node.right);

        if(leftNum < rightNum) {
            var temp = rightNum - leftNum;
            if(temp > 1) isBalancedResult = false;
            return 1 + rightNum;
        }

        if(rightNum < leftNum) {
            var temp = leftNum - rightNum;
            if(temp > 1) isBalancedResult = false;
            return 1 + leftNum;
        }

        return 1 + leftNum;
    }

    dfs(root);

    return isBalancedResult;
    
};


// 我的迭代法
// 获取当前节点的高度
var getHeight = function (curNode) {
    let queue = [], res = 0;
    if (!curNode) return res;
    
    queue.push(curNode); // 压入当前元素

    let depth = 0;
    while (queue.length) {
        let node = queue.pop(); // 取出栈顶
        if (node) {
            depth++;
            // queue.push(node); // 中
            queue.push(null); // 处理该节点的标记
            node.right && queue.push(node.right);   // 右
            node.left && queue.push(node.left);     // 左
        } else {
            depth--;
            // queue.pop();
        }
        res = res > depth ? res : depth;
    }
    return res;
}

var isBalanced = function (root) {
    if (root === null) return true;
    let queue = [root];
    while (queue.length) {
        let node = queue.pop(); // 取出栈顶
        if (Math.abs(getHeight(node.left) - getHeight(node.right)) > 1) {
            return false;
        }
        node.right && queue.push(node.right);
        node.left && queue.push(node.left);
    }
    return true;
};