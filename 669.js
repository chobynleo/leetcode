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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
// 递归法
var trimBST = function(root, low, high) {
    if(!root) return root;

    // 落在low high区间外
    if(root.val < low) return trimBST(root.right, low, high);
    if(root.val > high) return trimBST(root.left, low, high);

    // 落在low high区间内
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);

    return root;
};

// 迭代法
var trimBST = function(root, low, high) {
    if(!root) return root;

    // 把边角裁去，留下根节点
    while(root && (root.val < low || root.val > high)) {
        if(root.val < low) root = root.right;
        if(root.val > high) root = root.left;
    }

    // 裁去左边 < low
    var cur = root;
    while(cur) {
        while(cur.left && cur.left.val < low) cur.left = cur.left.right;
        cur = cur.left;
    }

    // 裁去右边 > high
    cur = root
    while(cur) {
        while(cur.right && cur.right.val > high) cur.right = cur.right.left;
        cur = cur.right;
    }

    return root;
};