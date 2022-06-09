/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    // 数组为0，则为空节点
    if(!postorder.length) return null;

    // 先找中间节点的值 
    var midValue = postorder[postorder.length - 1];
    // 切割inorder，记录中间节点下标
    var midIndex = inorder.indexOf(midValue);
    var leftInorder = inorder.slice(0, midIndex);
    var rightInorder = inorder.slice(midIndex + 1, inorder.length);
    // 切割postorder，记住一个关键信息，无论哪种遍历，左子树右子树的节点数都是相等的
    var leftNumberIndex = leftInorder.length;
    var leftPostorder = postorder.slice(0, leftNumberIndex);
    var rightPostorder = postorder.slice(leftNumberIndex, postorder.length - 1);

    // 构造中间节点
    var midNode = new TreeNode(midValue);

    midNode.left = buildTree(leftInorder, leftPostorder)
    midNode.right = buildTree(rightInorder, rightPostorder)

    return midNode;
};