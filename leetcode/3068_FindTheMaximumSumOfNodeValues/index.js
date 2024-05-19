/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 */
var maximumValueSum = function (nums, k, edges) {
	const n = nums.length
	const delta = nums.map((num) => (num ^ k) - num)

	delta.sort((a, b) => b - a)

	let res = nums.reduce((acc, cur) => acc + cur, 0)

	for (let i = 0; i < n; i += 2) {
		if (i === n - 1) break

		let pathDelta = delta[i] + delta[i + 1]

		if (pathDelta <= 0) break

		res += pathDelta
	}

	return res
}
