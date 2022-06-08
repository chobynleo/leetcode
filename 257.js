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
 * @return {string[]}
 */

// 我的解法
var binaryTreePaths = function(root) {
    var res = [];

    var dfs = function(node, str) {
        if(!node) return;

        // 中
        if(str) {
            str = str + '->'+ node.val;
        } else {
            str = node.val + '';
        }
        
        if(node.left) dfs(node.left, str); // 左
        if(node.right) dfs(node.right, str); // 右

        if(!node.left && !node.right) res.push(str);

        return;
    }

    dfs(root, '');
    
    return res;
};

// 官方递归法
var binaryTreePaths = function(root) {
    var res = [];

    var dfs = function(node, str) {

        if(!node.left && !node.right) {
            str += node.val; // 中
            res.push(str);
            return;
        }

        str += node.val + '->'; // 中
        
        if(node.left) dfs(node.left, str); // 左
        if(node.right) dfs(node.right, str); // 右

    }

    dfs(root, '');
    
    return res;
};

// 官方迭代法
var binaryTreePaths = function(root) {
    var res = [], paths = [''], stack = [];

    if(!root) return res;
    
    stack.push(root);

    while(stack.length) {

        var node = stack.pop();
        var path = paths.pop();

        if(!node.left && !node.right) {
            path += node.val; // 中
            res.push(path);
            continue; // 这个总是容易写出 return
        }

        // 中
        path += node.val + '->';

        if(node.right) {
            stack.push(node.right); // 右
            paths.push(path);
        }

        if(node.left) {
            stack.push(node.left); // 左
            paths.push(path);
        }

    }

    return res;
};