/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
	if (n === 0) return 1
	if (n < 0) {
		x = 1 / x
		n = -n
	}
	if (n % 2 === 0) {
		let halfPow = myPow(x, n / 2)
		return halfPow * halfPow
	}

	return x * myPow(x, n - 1)
}
