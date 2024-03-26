class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        lst = list(enumerate(nums))
        lst = sorted(lst, key = lambda n: n[1])
        left = 0
        right = len(lst) - 1
        diff = target - lst[left][1]
        while left < right:
            l, l_val = lst[left]
            r, r_val = lst[right]
            if l_val + r_val == target:
                return l, r
            elif r_val > diff:
                right -= 1
            else:
                left += 1
                diff = target - lst[left][1]
        