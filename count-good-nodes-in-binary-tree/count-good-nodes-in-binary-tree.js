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
var goodNodes = function(root, maxVal = -Infinity) {
    let currVal = root ? root.val : -Infinity;
    let valid = currVal >= maxVal ? 1 : 0;
    valid += root.left ? goodNodes(root.left, Math.max(currVal, maxVal)) : 0;
    valid += root.right ? goodNodes(root.right, Math.max(currVal, maxVal)) : 0;
    return valid;
};