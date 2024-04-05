/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
	if (n < 1000) return String(n)

	const nums = String(n).split('')
	let l = nums.length
	let r = 0

	while (l > 0) {
		if (r % 3 === 0 && r !== 0) nums.splice(l, 0, '.')
		l--
		r++
	}

	return nums.join('')
}
