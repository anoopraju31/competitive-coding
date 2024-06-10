class Solution(object):
    def checkSubarraySum(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: bool
        """
        reminder = { 0: -1 }
        total = 0

        for i, n in enumerate(nums):
            total += n
            r = total % k

            if r not in reminder:
                reminder[r] = i
            elif i - reminder[r] > 1:
                return True
        
        return False