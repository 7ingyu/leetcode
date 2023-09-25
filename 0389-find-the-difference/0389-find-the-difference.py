class Solution(object):
    def findTheDifference(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: str
        """
        sorted_s = sorted(s)
        sorted_t = sorted(t)
        for i in range(0, len(t)):
            if i >= len(sorted_s) or sorted_s[i] is not sorted_t[i]:
                return sorted_t[i]