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
var isValidBST = function(root, limit) {
    if (!root) {
        return true
    }
    if (root?.left === null && root?.right === null) {
        return true
    }
    if (root?.left !== null) {
        if (root.left.val >= root.val || root.left.val <= (limit?.min || -Infinity)) {
            return false
        }
    }
    if (root?.right !== null) {
        if (root.right.val <= root.val || root.right.val >= (limit?.max || Infinity)) {
            return false
        }
    }
    return isValidBST(root?.left, { max: root.val, min: limit?.min || -Infinity }) 
        && isValidBST(root?.right, { min: root.val, max: limit?.max || Infinity }) 
};