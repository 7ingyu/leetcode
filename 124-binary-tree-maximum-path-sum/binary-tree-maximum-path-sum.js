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
var maxPathSum = function(root) {
    let max = -Infinity
    const getSums = (node) => {
        if (!node) return 0 
        const leftLeg = getSums(node.left)
        const rightLeg = getSums(node.right)
        const angle = node.val + leftLeg + rightLeg
        max = Math.max(max, angle, node.val + leftLeg, node.val + rightLeg, node.val)
        return Math.max(node.val + leftLeg, node.val + rightLeg, node.val)
    }
    getSums(root)
    return max
};