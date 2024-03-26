class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        record = {}  
        
        for i, num in enumerate(nums):
            diff = target - num
            if diff in record:
                return [record[diff], i] 
            record[num] = i
        
        