from collections import Counter

class Solution(object):
    def minIncrementForUnique(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        count = Counter(nums)
        res = 0

        for i in range(len(nums) + max(nums)):
            if count[i] > 1:
                extra = count[i] - 1
                count[i + 1] += extra
                res += extra

        return res