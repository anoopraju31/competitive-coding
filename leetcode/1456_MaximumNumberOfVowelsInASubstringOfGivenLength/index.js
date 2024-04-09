/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
	const isVowel = (c) =>
		c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u'
	count = 0

	for (let i = 0; i < k; i++) {
		if (isVowel(s[i])) count++
	}

	let max = count

	for (let i = k; i < s.length; i++) {
		if (isVowel(s[i])) count++
		if (isVowel(s[i - k])) count--
		max = Math.max(max, count)
	}

	return max
}
