class Solution(object):
    def beautifulSubsets(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        cnt = Counter(nums)
        groups = []
        visit = set()
        cache = {}

        def helper(n, g):
            if n not in g: return 1
            if n in cache: return cache[n]

            skip = helper(n+k, g)
            include = (2**g[n] - 1) * helper(n + 2 * k, g)
            cache[n] = skip + include
            
            return skip + include


        for n in cnt.keys():
            if n in visit: continue

            g = {}

            while n - k in cnt: n -= k
            while n in cnt:
                g[n] = cnt[n]
                visit.add(n)
                n += k
            
            groups.append(g)

        
        res = 1

        for g in groups:
            n = min(g.keys())
            res *= helper(n, g)

        return res - 1