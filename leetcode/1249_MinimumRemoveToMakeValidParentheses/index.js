/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
	const stack = []
	let l = 0

	while (l < s.length) {
		if (s[l] === '(') stack.push({ p: '(', i: l })
		else if (s[l] === ')' && stack.length) stack.pop()
		else if (s[l] === ')' && stack.length === 0) {
			s = s.slice(0, l) + s.slice(l + 1)
			l--
		}

		l++
	}

	l = stack.length - 1
	while (l >= 0) {
		s = s.slice(0, stack[l].i) + s.slice(stack[l].i + 1)
		l--
	}

	return s
}
