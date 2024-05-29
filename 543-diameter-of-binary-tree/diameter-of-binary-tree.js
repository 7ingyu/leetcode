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
var diameterOfBinaryTree = function(root) {
    max = 0
    const distanceFromEnd = (node, level = 0) => {
        if (!node) return 0
        const leftDistance = distanceFromEnd(node.left, level + 1)
        const rightDistance = distanceFromEnd(node.right, level + 1)
        max = Math.max(leftDistance + rightDistance, max)
        return Math.max(1 + leftDistance, 1 + rightDistance)
    }
    distanceFromEnd(root)
    return max
};