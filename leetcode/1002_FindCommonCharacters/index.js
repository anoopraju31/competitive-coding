/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
	const count = getCount(words[0])

	for (let word of words) {
		const currentCount = getCount(word)

		for (let c in count) count[c] = Math.min(count[c], currentCount[c] || 0)
	}

	const res = []

	for (let c in count) for (let i = 0; i < count[c]; i++) res.push(c)

	return res
}

const getCount = (word) => {
	const count = {}

	for (const char of word) count[char] = count[char] + 1 || 1

	return count
}
