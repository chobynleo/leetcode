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
 * @return {number[]}
 */
 var findMode = function(root) {
    var pre = null, count = 0, maxCount = 0, res = [];

    var inOrder = function(cur) {
        if(!cur) return;

        inOrder(cur.left);

        if(pre) {
            if(pre.val == cur.val) {
                count++;
            } else {
                count = 1;
            }

            if(count == maxCount) {
                res.push(cur.val);
            } else if(count > maxCount) {
                maxCount = count;
                res = [cur.val];
            }
            
        } else {
            count = 1;
            maxCount = count;
            res = [cur.val];
        }

        pre = cur;

        inOrder(cur.right);
    }

    inOrder(root);

    return res;
};