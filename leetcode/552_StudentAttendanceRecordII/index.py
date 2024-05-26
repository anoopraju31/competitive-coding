from collections import defaultdict

class Solution(object):
    def checkRecord(self, n):
        """
        :type n: int
        :rtype: int
        """
        MOD = 10 ** 9 + 7
        cache = {}
        def count(n):
            if n == 1:
                return {
                    (0, 0): 1,
                    (0, 1): 1,
                    (0, 2): 0,
                    (1, 0): 1,
                    (1, 1): 0,
                    (1, 2): 0
                }

            if n in cache: return cache[n]

            temp = count(n - 1)
            res = defaultdict(int)

            # Choose P
            res[(0, 0)] = ((temp[(0, 0)] + temp[(0, 1)]) % MOD + temp[(0, 2)]) % MOD
            res[(1, 0)] = ((temp[(1, 0)] + temp[(1, 1)]) % MOD + temp[(1, 2)]) % MOD

            # Choose L
            res[(0, 1)] += temp[(0, 0)]
            res[(1, 1)] += temp[(1, 0)]
            res[(0, 2)] += temp[(0, 1)]
            res[(1, 2)] += temp[(1, 1)]

            # Choose A
            res[(1, 0)] = (res[(1, 0)] + (((temp[(0, 0)] + temp[(0, 1)]) % MOD + temp[(0, 2)])) % MOD) % MOD
            cache[n] = res
            
            return res

        return sum(count(n).values()) % MOD