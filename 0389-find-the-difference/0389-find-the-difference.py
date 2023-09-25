class Solution(object):
    def findTheDifference(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: str
        """
        count_s = dict()
        count_t = dict()
        for char in s:
            if count_s.get(char) is None:
                count_s[char] = 1
            else:
                count_s[char] += 1
        for char in t:
            if count_t.get(char) is None:
                count_t[char] = 1
            else:
                count_t[char] += 1
            if count_s.get(char) is None or count_t[char] > count_s[char]:
                return char