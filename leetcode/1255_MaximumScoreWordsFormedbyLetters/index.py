from collections import Counter

class Solution(object):
    def maxScoreWords(self, words, letters, score):
        """
        :type words: List[str]
        :type letters: List[str]
        :type score: List[int]
        :rtype: int
        """
        def canFormWord(word, letterCount):
            wordCount = Counter(word)

            for char in wordCount:
                if wordCount[char] > letterCount[char]:
                    return False

            return True

        def getScore(word):
            wordScore = 0

            for char in word:
                wordScore += score[ord(char) - ord('a')]

            return wordScore

        letterCount = Counter(letters)

        def backtrack(idx):
            if idx == len(words): return 0

            res = backtrack(idx + 1) # skip

            # Include
            if (canFormWord(words[idx], letterCount)):
                for char in words[idx]:
                    letterCount[char] -= 1

                res = max(res, getScore(words[idx]) + backtrack(idx + 1))

                for char in words[idx]:
                    letterCount[char] += 1

            return res

        return backtrack(0)