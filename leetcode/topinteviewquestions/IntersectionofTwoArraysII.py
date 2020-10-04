import collections


class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        countMap = collections.Counter(nums1)

        result = []
        for num in nums2:
            if num in countMap and countMap[num] > 0:
                result.append(num)
                countMap[num] = countMap[num]-1
        return result
