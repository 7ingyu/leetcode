/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    let val = null
    if (typeof root1?.val === 'number') val += root1?.val
    if (typeof root2?.val === 'number') val += root2?.val
    return typeof val === 'number'
        ? new TreeNode(
            val, 
            mergeTrees(root1?.left, root2?.left),
            mergeTrees(root1?.right, root2?.right)
        )
        : null
};