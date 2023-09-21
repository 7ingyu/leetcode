class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        idx_1 = 0
        idx_2 = 0
        merged = []
        while idx_1 < len(nums1) and idx_2 < len(nums2):
            if nums1[idx_1] <= nums2[idx_2]:
                merged.append(nums1[idx_1])
                idx_1 += 1
            else:
                merged.append(nums2[idx_2])
                idx_2 += 1
        if idx_1 < len(nums1):
            merged = merged + nums1[idx_1:]
        elif idx_2 < len(nums2):
            merged = merged + nums2[idx_2:]
        center = len(merged) // 2
        # print("center", center)
        if len(merged) % 2 != 0:
            # print("odd", merged)
            return merged[center]
        else:
            # print("even", merged)
            return (merged[center] + merged[center - 1]) / 2