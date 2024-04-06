/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
	let str = ''
	let l1 = 0
	let l2 = 0

	while (l1 < word1.length && l2 < word2.length)
		str += word1[l1++] + word2[l2++]

	while (l1 < word1.length) str += word1[l1++]

	while (l2 < word2.length) str += word2[l2++]

	return str
}

var mergeAlternately = function (word1, word2) {
	let ans = []
	for (let i = 0; i < word1.length + word2.length; i++) {
		ans.push(word1[i])
		ans.push(word2[i])
	}

	return ans.join('')
}
