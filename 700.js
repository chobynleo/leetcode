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
 * @param {number} val
 * @return {TreeNode}
 */
// 递归法
var searchBST = function(root, val) {
    if(!root || root.val == val) return root;

    if(val < root.val) return searchBST(root.left, val);
    if(val > root.val) return searchBST(root.right, val);
};

// 迭代法
var searchBST = function(root, val) {
    if(!root) return root;

    var stack = [root];

    while(stack.length) {
        var node = stack.pop();

        if(!node || node.val == val) return node;

        if(val < node.val) stack.push(node.left);
        if(val > node.val) stack.push(node.right);
    }

    return null;
};

// 官方迭代法
var searchBST = function (root, val) {
    while (root !== null) {
        if (root.val > val)
            root = root.left;
        else if (root.val < val)
            root = root.right;
        else 
            return root;
    }
    return null;
};