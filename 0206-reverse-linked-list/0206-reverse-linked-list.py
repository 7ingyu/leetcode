# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def reverseList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        
        if head is None:
            return head
        
        new_head = head
        next = head.next
        new_head.next = None
        
        while next is not None:
            current = next
            next = next.next
            current.next = new_head
            new_head = current
        
        return new_head
            
        
        
        
        