/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
	const n1 = str1.length
	const n2 = str2.length

	const isDivisor = (l) => {
		if (n1 % l || n2 % l) return false

		let k1 = n1 / l
		let k2 = n2 / l

		return (
			str1.slice(0, l).repeat(k1) === str1 &&
			str1.slice(0, l).repeat(k2) === str2
		)
	}

	for (let i = Math.min(n1, n2); i > 0; i--)
		if (isDivisor(i)) return str1.slice(0, i)

	return ''
}

var gcdOfStrings = (str1, str2) => {
	if (str1 + str2 !== str2 + str1) return ''

	let a = str1.length
	let b = str2.length

	while (b) {
		let temp = b
		b = a % b
		a = temp
	}

	return str1.slice(0, a)
}
