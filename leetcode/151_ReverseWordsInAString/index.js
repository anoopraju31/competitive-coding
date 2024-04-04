/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	const stack = s.split(' ').filter((s) => s !== '')
	let str = ''

	for (let i = stack.length - 1; i >= 0; i--)
		str += stack[i] + (i >= 1 ? ' ' : '')

	return str
}

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	const stack = s.split(' ')
	let reverseStr = ''

	for (let i = stack.length - 1; i >= 0; i--) {
		if (stack[i] === '') continue
		if (reverseStr.length > 0) reverseStr += ' '
		reverseStr += stack[i]
	}

	return reverseStr
}
