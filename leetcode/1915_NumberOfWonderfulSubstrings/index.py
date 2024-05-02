from collections import defaultdict 

def wonderfulSubstrings(word):
    """
    :type word: str
    :rtype: int
    """
    mask = 0
    cnt = defaultdict(int)
    cnt[0] = 1
    ans = 0

    for c in word:
        idx = ord(c) - ord('a')
        mask ^= (1 << idx)
        ans += cnt[mask]

        for i in range(10):
            preMask = mask ^ (1 << i)
            ans += cnt[preMask]

        cnt[mask] += 1

    return ans

print(wonderfulSubstrings('aabb'))