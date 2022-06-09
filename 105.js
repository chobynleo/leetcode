/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    // 数组为0，则为空节点
    if(!inorder.length) return null;

    // 先找中间节点的值 
    var midValue = preorder[0];
    // 切割inorder，记录中间节点下标
    var midIndex = inorder.indexOf(midValue);
    var leftInorder = inorder.slice(0, midIndex);
    var rightInorder = inorder.slice(midIndex + 1, inorder.length);
    // 切割preorder，记住一个关键信息，无论哪种遍历，左子树右子树的节点数都是相等的
    var leftNumberIndex = leftInorder.length;
    var leftPreorder = preorder.slice(1, leftNumberIndex + 1);
    var rightPreorder = preorder.slice(leftNumberIndex + 1, preorder.length);

    // 构造中间节点
    var midNode = new TreeNode(midValue);

    midNode.left = buildTree(leftPreorder, leftInorder)
    midNode.right = buildTree(rightPreorder, rightInorder)

    return midNode;
};