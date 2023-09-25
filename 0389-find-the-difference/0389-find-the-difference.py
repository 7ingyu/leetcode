class Solution(object):
    def findTheDifference(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: str
        """
        copy = t
        for char in s:
            copy = copy.replace(char, '', 1)
        return copy