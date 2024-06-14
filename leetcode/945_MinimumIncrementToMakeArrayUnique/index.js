/**
 * @param {number[]} nums
 * @return {number}
 */
// Time: O(n)
// Space: O(n)
var minIncrementForUnique = function (nums) {
	const map = {}

	for (const num of nums) map[num] = map[num] + 1 || 1

	let moves = 0

	for (const key of Object.keys(map)) {
		if (map[key] === 1) continue

		let count = 1
		let n = parseInt(key)

		while (map[n] > 1) {
			while (map[n + count]) count++

			map[n + count] = 1
			map[n]--
			moves += count
		}
	}

	return moves
}

// Time: O(n)
// Space: O(1)
var minIncrementForUnique = function (nums) {
	const n = nums.length
	const max = Math.max(...nums)
	const count = {}

	for (const num of nums) count[num] = (count[num] || 0) + 1

	let res = 0

	for (let i = 0; i <= n + max; i++)
		if (count[i] > 1) {
			let extra = count[i] - 1
			count[i + 1] = (count[i + 1] || 0) + extra
			res += extra
		}

	return res
}
