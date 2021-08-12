/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = [];
    const getNodes = (node, level = 0) => {
        if (node !== null) {
            if (result[level] === undefined) {
                result[level] = [node.val];
            } else {
                result[level].push(node.val)
            }
            for (let child of node.children) {
                getNodes(child, level + 1);
            }   
        }
        return;
    }
    getNodes(root);
    return result;
};