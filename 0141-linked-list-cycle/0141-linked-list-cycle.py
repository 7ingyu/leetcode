# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def hasCycle(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """
        if head is None:
            return False
        
        current = head
        nodes = { head }
        
        while current.next is not None:
            current = current.next
            if current in nodes:
                return True
            else:
                nodes.add(current)
        
        return False