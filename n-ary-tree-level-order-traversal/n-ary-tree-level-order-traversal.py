"""
# Definition for a Node.
class Node(object):
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""

class Solution(object):
    def levelOrder(self, root):
        """
        :type root: Node
        :rtype: List[List[int]]
        """
        result = list()
        
        def getNode(node, level=0):
            """
            :type node: Node
            :type level: int
            :rtype: none
            """
            if (node != None):
                if len(result) < level + 1:
                    result.append([])
                result[level].append(node.val)
                for child in node.children:
                    getNode(child, level + 1)
        
        getNode(root)
        return result