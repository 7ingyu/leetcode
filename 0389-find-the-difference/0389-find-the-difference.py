class Solution(object):
    def findTheDifference(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: str
        """
        s_sum = 0
        t_sum = 0
        for i in range(0, len(t)):
            s_sum += ord(s[i]) if i < len(s) else 0
            t_sum += ord(t[i])
        return chr(t_sum - s_sum)