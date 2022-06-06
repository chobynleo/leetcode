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

// 递归法-深度优先遍历-后序遍历
// 为什么不用前序遍历和中序遍历？因为前序还不知道左右孩子的节点数量，中序不知道右孩子数量
var countNodes = function(root) {   
    
    if(!root) return 0;

    var leftNum = countNodes(root.left);
    var rightNum = countNodes(root.right);

    return 1 + leftNum + rightNum;
};

// 迭代法-广度优先遍历-层次遍历
var countNodes = function(root) {   
    var countNum = 0, queue = [];
    if(!root) return countNum;

    queue.push(root);

    while(queue.length) {

        var len = queue.length;

        for (let i = 0; i < len; i++) {
            countNum++;
            
            var node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }

    return countNum;
};