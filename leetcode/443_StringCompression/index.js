/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
	let l = 0
	let r = 0

	const getDigits = (n) => {
		const digits = []

		while (n) {
			digits.unshift(String(n % 10))
			n = Math.floor(n / 10)
		}

		return digits
	}

	while (r <= chars.length) {
		if (r < chars.length && chars[l] === chars[r]) {
			r++
			continue
		}

		let count = r - l

		if (count === 1) {
			r++
			l++
			continue
		}

		const digits = getDigits(count)

		chars.splice(l + 1, count - 1, ...digits)

		l += digits.length + 1
		r = l
	}

	return chars.length
}

var compress = function (chars) {
	let count = 1
	let str = ''

	for (let i = 1; i <= chars.length; i++) {
		if (chars[i - 1] === chars[i]) count++
		else {
			str += chars[i - 1]
			if (count > 1) str += count
			count = 1
		}
	}

	for (let i = 0; i < str.length; i++) chars[i] = str[i]

	chars.length = str.length

	return str.length
}
