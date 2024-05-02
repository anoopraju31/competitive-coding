/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
	let i = 0

	while (i < word.length) if (word[i++] === ch) break

	if (i === word.length && word[i - 1] !== ch) return word

	const reversedPrefix = word.slice(0, i).split('').reverse().join('')

	return reversedPrefix + word.slice(i)
}
