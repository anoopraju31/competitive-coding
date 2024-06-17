/**
 * @param {number} c
 * @return {boolean}
 */
// Binary Search
// Time: O(log n)
// Space: O(1)
var judgeSquareSum = function (c) {
	let right = parseInt(Math.sqrt(c))
	let left = 0

	while (left <= right) {
		const total = left * left + right * right

		if (total < c) left++
		else if (total > c) right--
		else return true
	}

	return false
}
