/**
 * @param {string} s
 * @return {number}
 */
// Using REGEX
// Time: O(n)
// Space: O(1)
var myAtoi = function (s) {
	const MIN = -2147483648 // -2^31
	const MAX = 2147483647 // 2^31 - 1
	const match = s.match(/^ *([+-]?\d+)/)

	if (!match) return 0

	return Math.min(Math.max(parseInt(match), MIN), MAX)
}
