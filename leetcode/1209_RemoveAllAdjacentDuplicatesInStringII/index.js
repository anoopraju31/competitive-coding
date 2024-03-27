/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
	const stack = []

	for (let i = 0; i < s.length; i++) {
		let current = s[i]

		if (stack.length === 0 || current !== stack[stack.length - 1][0])
			stack.push([current, 1])
		else {
			stack[stack.length - 1][1]++
			if (stack[stack.length - 1][1] === k) stack.pop()
		}
	}

	let result = ''

	for (let [char, count] of stack) {
		result += char.repeat(count)
	}

	return result
}
