/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
	if (s.length <= 1) return s

	let stack = ''

	for (let i = 0; i < s.length; i++) {
		stack += s[i]

		while (
			stack.length > 0 &&
			Math.abs(stack.charCodeAt(stack.length - 1) - s.charCodeAt(i + 1)) === 32
		) {
			stack = stack.slice(0, -1)
			i++
		}
	}

	return stack
}
