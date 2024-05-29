/**
 * @param {string} s
 * @return {number}
 */

// Time: O(n^2)
var numSteps = function (s) {
	let res = 0

	const addOne = (str) => {
		str = str.split('')
		let i = str.length - 1

		while (i >= 0 && str[i] === '1') str[i--] = '0'

		if (i === -1) str.unshift('1')
		else str[i] = '1'

		return str.join('')
	}

	while (s != '1') {
		if (s[s.length - 1] == '0') s = s.slice(0, s.length - 1)
		else s = addOne(s)

		res++
	}

	return res
}

// Time: O(n)
var numSteps = function (s) {
	let res = 0
	let c = 0

	for (let i = s.length - 1; i > 0; i--) {
		const digit = (parseInt(s[i]) + c) % 2

		if (digit === 1) {
			c = 1
			res++
		}
		res++
	}

	return res + c
}

var numSteps = function (s) {
	let res = 0
	let c = 0

	for (let i = s.length - 1; i > 0; i--) {
		const digit = (parseInt(s[i]) + c) % 2

		if (digit === 1) {
			c = 1
			res += 2
		} else res++
	}

	return res + c
}
