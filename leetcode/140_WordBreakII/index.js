/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
	wordDict = new Set(wordDict)
	const cache = {}

	const backtrack = (i) => {
		if (i === s.length) return ['']
		if (cache.hasOwnProperty(i)) return cache[i]

		const res = []

		for (let j = i; j < s.length; j++) {
			let w = s.slice(i, j + 1)

			if (!wordDict.has(w)) continue

			let strs = backtrack(j + 1)

			if (!strs) continue

			for (const str of strs) {
				sentence = w

				if (str) sentence += ' ' + str

				res.push(sentence)
			}
		}

		cache[i] = res
		return res
	}

	return backtrack(0)
}
