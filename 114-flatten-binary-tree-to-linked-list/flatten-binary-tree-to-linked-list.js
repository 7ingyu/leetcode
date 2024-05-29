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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    const stack = []
    if (!root) return stack
    const left = root?.left
    const right = root?.right
    stack.push(root)
    if (left) stack.push(...flatten(left))
    if (right) stack.push(...flatten(right))
    for (let i = 0; i < stack.length; i++) {
        const node = stack[i]
        node.left = null
        node.right = stack[i + 1] || null
    }
    return stack
};