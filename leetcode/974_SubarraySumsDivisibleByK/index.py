class Solution(object):
    def subarraysDivByK(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        sum = {0:1}
        count = 0
        check_sum = 0

        for n in nums:
            check_sum += n
            
            if check_sum % k in sum:
                count += sum[check_sum % k]

            if check_sum % k not in sum:
                sum[check_sum % k] = 1
            else:
                sum[check_sum % k] += 1
            
            
        return count