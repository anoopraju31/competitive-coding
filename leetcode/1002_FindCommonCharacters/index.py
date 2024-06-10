from collections import Counter

class Solution(object):
    def commonChars(self, words):
        """
        :type words: List[str]
        :rtype: List[str]
        """
        count = Counter(words[0])

        for word in words:
            current_count = Counter(word)

            for c in count:
                count[c] = min(count[c], current_count[c])

        res = []

        for c in count:
            for i in range(count[c]):
                res.append(c)

        return res