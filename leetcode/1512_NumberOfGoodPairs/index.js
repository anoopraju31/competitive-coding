/**
 * @param {number[]} nums
 * @return {number}
 */
// Hashmap
// Time: O(n)
// Space: O(n)
var numIdenticalPairs = function (nums) {
	const map = {}
	let count = 0

	for (let num of nums) map[num] = map[num] + 1 || 1

	for (let num of nums) {
		map[num] -= 1
		count += map[num]
	}

	return count
}

// Prefix
// Time: O(n)
// Space: O(1)
var numIdenticalPairs = function (nums) {
	const f = (x, nums) => {
		let count = 0

		for (let num of nums) if (num == x) count++

		return count
	}

	let ans = 0

	for (let num of nums) ans += f(num, nums)

	return ans
}
