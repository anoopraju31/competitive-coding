/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function (words, letters, score) {
	const canFormWord = (word, letterCount) => {
		const wordCount = {}

		for (const letter of word) wordCount[letter] = wordCount[letter] + 1 || 1

		for (const char of Object.keys(wordCount))
			if (wordCount[char] > (letterCount[char] || 0)) return false

		return true
	}

	const getScore = (word) => {
		let wordScore = 0

		for (const char of word)
			wordScore += score[char.charCodeAt(0) - 'a'.charCodeAt(0)]

		return wordScore
	}

	const letterCount = {}

	for (const letter of letters)
		letterCount[letter] = letterCount[letter] + 1 || 1

	const backtrack = (idx) => {
		if (idx === words.length) return 0

		let res = backtrack(idx + 1) // Skip

		// include (when possible)
		if (canFormWord(words[idx], letterCount)) {
			for (const char of words[idx]) letterCount[char] -= 1

			res = Math.max(res, getScore(words[idx]) + backtrack(idx + 1))

			// Clean Up
			for (const char of words[idx]) letterCount[char] += 1
		}

		return res
	}

	return backtrack(0)
}
