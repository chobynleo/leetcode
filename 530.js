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

// 递归法
var getMinimumDifference = function(root) {
    var pre = null, minResult = Infinity;

    var inOrder = function(cur) {
        if(!cur) return;

        inOrder(cur.left);

        if(pre) {
            minResult = Math.min(minResult, cur.val - pre.val);
        }
        pre = cur;

        inOrder(cur.right);
    }

    inOrder(root);
    return minResult;
};

// 迭代法
var getMinimumDifference = function(root) {
    var pre = null, minResult = Infinity, stack = [root];

    while(stack.length) {
        var node = stack.pop();

        if(node) {
            if(node.right) stack.push(node.right);
            stack.push(node);
            stack.push(null);
            if(node.left) stack.push(node.left);
        } else {
            var cur = stack.pop();
            if(pre) {
                minResult = Math.min(minResult, cur.val - pre.val);
            }
            pre = cur;
        }
    }

    return minResult;
};