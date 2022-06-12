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

// 递归法 - 中序遍历 - 借用二叉搜索树特性，中序遍历为递增序列 - 官方解法
var isValidBST = function(root) {
    if(!root) return true;

    var pre = null;

    var inOrder = function(node) {
        if(!node) return true;

        var boolLeft = inOrder(node.left);

        if(pre && pre.val >= node.val) return false;
        pre = node;

        var boolRight = inOrder(node.right);

        return boolLeft && boolRight;
    }

    return inOrder(root);
};

// 递归法 - 中序遍历 - 借用二叉搜索树特性，中序遍历为递增序列 - 我的解法
var isValidBST = function(root) {
    if(!root) return true;

    var inOrder = function(node, arr) {
        if(!node) return true;

        var boolLeft = inOrder(node.left, arr);

        if(node) {
            if(!arr.length) {
                arr.push(node.val);
            } else {
                var value = node.val;
                var last = arr[arr.length - 1];
                if(value <= last) return false;
                arr.push(value);
            }
        }

        var boolRight = inOrder(node.right, arr);

        return boolLeft && boolRight;
    }

    return inOrder(root, []);
};

// 迭代法 - 中序遍历
var isValidBST = function(root) {
    if(!root) return true;

    var stack = [root], pre = null;

    while(stack.length) {
        var node = stack.pop();

        if(node) {
            if(node.right) stack.push(node.right);
            stack.push(node);
            stack.push(null);
            if(node.left) stack.push(node.left);
        } else {
            var midNode = stack.pop();
            if(pre && pre.val >= midNode.val) return false;
            pre = midNode;
        }
    }

    return true;
};