/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
	const lowerCase = new Set()
	const upperCase = new Set()
	const selected = new Set()
	let count = 0

	for (let letter of word) {
		const lower = letter.toLowerCase()
		const upper = letter.toUpperCase()

		if (
			((lowerCase.has(lower) && letter === upper) ||
				(upperCase.has(upper) && letter === lower)) &&
			!selected.has(lower)
		) {
			count++
			selected.add(lower)
		}
		if (!lowerCase.has(letter) && letter === lower) lowerCase.add(letter)
		if (!upperCase.has(letter) && letter === upper) upperCase.add(letter)
	}

	return count
}
