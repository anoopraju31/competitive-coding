/**
 * @param {string} word
 * @return {number}
 */
var addMinimum = function (word) {
	const n = word.length
	let count = 0
	let i = 0

	while (i < n) {
		if (
			i - 3 < n &&
			word[i] === 'a' &&
			word[i + 1] === 'b' &&
			word[i + 2] === 'c'
		)
			i += 3
		else if (
			i - 2 < n &&
			((word[i] === 'a' && word[i + 1] === 'b') ||
				(word[i] === 'b' && word[i + 1] === 'c') ||
				(word[i] === 'a' && word[i + 1] === 'c'))
		) {
			count++
			i += 2
		} else {
			count += 2
			i++
		}
	}

	return count
}
