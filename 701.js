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
var insertIntoBST = function(root, val) {
    if(!root) return new TreeNode(val);

    var BST = function(root, val) {
        if(root.val < val) {
            if(!root.right) {
                root.right = new TreeNode(val);
            }
            BST(root.right, val)
        }
    
        if(root.val > val) {
            if(!root.left) {
                root.left = new TreeNode(val);
            }
            BST(root.left, val)
        }
    }
    
    BST(root, val);

    return root;
};

// 迭代法
var insertIntoBST = function(root, val) {
    if(!root) return new TreeNode(val);

    var cur = root, parent = null;

    while(cur) {
        parent = cur;

        if(cur.val < val) {
            cur = cur.right;
        } else {
            cur = cur.left;
        }
    }

    if(parent.val < val) {
        parent.right = new TreeNode(val);
    } else {
        parent.left = new TreeNode(val);
    }

    return root;
};