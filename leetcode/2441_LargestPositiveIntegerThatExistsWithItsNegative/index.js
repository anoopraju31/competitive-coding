/**
 * @param {number[]} nums
 * @return {number}
 */
// Hashmap
// Time: O(n)
// Space: O(n)
var findMaxK = function (nums) {
	const map = {}
	let max = -Infinity

	for (let num of nums) map[-num] = num

	for (let num of nums) if (Math.abs(num) > max && map[num]) max = Math.abs(num)

	return max !== -Infinity ? max : -1
}

/**
 * @param {number[]} nums
 * @return {number}
 */
// Two Pointer
// Time: O(nlogn)
// Space: O(1)
var findMaxK = function (nums) {
	nums.sort((a, b) => a - b)

	let l = 0
	let r = nums.length - 1

	while (l < r) {
		const sum = nums[l] + nums[r]
		if (sum === 0) return nums[r]

		sum > 0 ? r-- : l++
	}

	return -1
}
