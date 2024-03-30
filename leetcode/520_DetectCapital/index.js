/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
	let countCapital = 0

	for (let letter of word) {
		if (letter === letter.toUpperCase()) countCapital++
	}

	if (countCapital === 0) return true
	if (countCapital === 1 && word[0] === word[0].toUpperCase()) return true
	if (countCapital === word.length) return true
	return false
}

var detectCapitalUse = function (word) {
	if (word === word.toUpperCase()) return true
	if (word === word.toLowerCase()) return true
	if (word === word[0].toUpperCase() + word.slice(1).toLowerCase()) return true
	return false
}
