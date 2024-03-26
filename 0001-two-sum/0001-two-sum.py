class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        lst = list(enumerate(nums))
        # print(f"enumerated: {lst}")
        lst = sorted(lst, key=lambda num: num[1])
        # print(f"sorted: {lst}")
        left = 0
        right = len(lst) - 1
        while left < right:
            l_idx, l_val = lst[left]
            r_idx, r_val = lst[right]
            if l_val + r_val == target:
                return l_idx, r_idx
            elif l_val + r_val > target:
                right -= 1
            elif l_val + r_val < target:
                left += 1
        
        