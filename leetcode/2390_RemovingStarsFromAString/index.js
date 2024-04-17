/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
	const stack = []
	let starCount = 0
	let i = 0

	while (i < s.length) {
		if (s[i] !== '*') stack.push(s[i])
		else starCount++

		while (starCount) {
			stack.pop()
			starCount--
		}

		i++
	}

	return stack.join('')
}
