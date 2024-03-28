/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (nums, k) {
	let i = 0
	let j = 0
	let res = 0
	const n = nums.length
	const map = new Map()

	while (i < n && j < n) {
		map.set(nums[j], map.get(nums[j]) + 1 || 1)

		while (map.get(nums[j]) > k) {
			map.set(nums[i], map.get(nums[i]) - 1)
			i++
		}

		res = Math.max(res, j - i + 1)
		j++
	}

	return res
}
