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
 * @return {boolean}
 */
var isValidBST = function(root, min, max) {
    if (root === null) return true;
    if (root.left) {
        if (root.left.val <= min || root.left.val >= root.val) return false;
    }
    if (root.right) {
        if (root.right.val >= max || root.right.val <= root.val) return false;
    }
    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
};