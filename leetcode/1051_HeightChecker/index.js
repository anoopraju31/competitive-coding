/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
	const n = heights.length
	const expected = heights.slice().sort((a, b) => a - b)
	let count = 0

	for (let i = 0; i < n; i++) if (expected[i] !== heights[i]) count++

	return count
}
