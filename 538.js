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
 * @return {TreeNode}
 */
// 递归法
var convertBST = function(root) {
    var cal = 0;
    var inOrder = function(root) {
        if(!root) return;

        inOrder(root.right);
        cal += root.val;
        root.val = cal;
        inOrder(root.left);
    }

    inOrder(root);

    return root;
};

// 迭代法
var convertBST = function(root) {
    if(!root) return root;

    var stack = [root], cal = 0;

    while(stack.length) {
        var node = stack.pop();

        if(node) {
            if(node.left) stack.push(node.left);
            stack.push(node);
            stack.push(null);
            if(node.right) stack.push(node.right);
        } else {
            var midNode = stack.pop();
            cal += midNode.val;
            midNode.val = cal;
        }
    }

    return root;
};