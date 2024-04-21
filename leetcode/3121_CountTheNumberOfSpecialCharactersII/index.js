/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
	const lowerCase = new Map()
	const upperCase = new Map()

	for (let i = 0; i < word.length; i++) {
		if (word[i] === word[i].toUpperCase() && !upperCase.has(word[i]))
			upperCase.set(word[i], i)
		if (word[i] === word[i].toLowerCase()) lowerCase.set(word[i], i)
	}

	let count = 0

	for (let letter of lowerCase.keys()) {
		const upper = letter.toUpperCase()
		if (upperCase.has(upper) && upperCase.get(upper) > lowerCase.get(letter))
			count++
	}

	return count
}
