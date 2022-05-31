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

var invertNode = function(node, left, right) {
    node.left = right;
    node.right = left;
}

// 递归法
var invertTree = function(root) {
    if(root == null) return root;

    invertNode(root, root.left, root.right);
    invertTree(root.left);
    invertTree(root.right);

    return root;
}

// 迭代法
var invertTree = function(root) {
    if(!root) return root;

    var stack = [];
    stack.push(root);

    while(stack.length) {
        var node = stack.pop();

        invertNode(node, node.left, node.right);
        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);
    }

    return root;

}
// 层次遍历
var invertTree = function(root) {
    // 层次遍历
    if(!root) return root;
    var queue = [];
    
    queue.push(root);

    while(queue.length) {
        var curLevelLen = queue.length;

        for (let i = 0; i < curLevelLen; i++) {
            var node = queue.shift();
            invertNode(node, node.left, node.right);

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }

    return root;
};