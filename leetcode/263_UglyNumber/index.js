/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
	if (n <= 0) return false

	const primes = [2, 3, 5]

	for (let p of primes) while (n % p === 0) n /= p

	return n === 1
}
