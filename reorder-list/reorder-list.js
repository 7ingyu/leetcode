/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let nodes = [head];
    let currNode = head;
    while (currNode.next !== null) {
        nodes.push(currNode.next);
        currNode = currNode.next;
    }
    for (let i = 0; i < nodes.length / 2; i ++) {
        nodes[i].next = nodes[nodes.length - i - 1];
        nodes[nodes.length - i - 1].next = nodes[i + 1];
    }
    let end = Math.floor(nodes.length / 2)
    nodes[end].next = null;
    return nodes[0];
};