/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
	if (dividend === 0) return 0

	const MIN = -2147483648
	const MAX = 2147483647
	const isNegative =
		(dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)
	let d = Math.abs(dividend)
	let dv = Math.abs(divisor)

	if (dv === 1) return Math.min(MAX, Math.max(MIN, isNegative ? -d : d))

	let output = 0

	while (d >= dv) {
		let t = dv
		let mul = 1

		while (d >= t) {
			d -= t
			output += mul
			mul += mul
			t += t
		}
	}

	if (isNegative) output = -output

	return Math.min(MAX, Math.max(MIN, output))
}
