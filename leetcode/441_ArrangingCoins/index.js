/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
	let count = 0
	let sum = 0

	do {
		count++
		sum = (count * (count + 1)) / 2
	} while (sum <= n)

	return count - 1
}
