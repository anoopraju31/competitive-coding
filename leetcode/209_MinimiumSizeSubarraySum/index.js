/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// Sliding Window
// Time: O(n)
// Space: O(1)
var minSubArrayLen = function (target, nums) {
	let size = Infinity
	let l = 0
	let r = 0
	let sum = 0

	while (r < nums.length) {
		sum += nums[r]
		while (sum >= target) {
			size = Math.min(size, r - l + 1)
			sum -= nums[l]
			l++
		}
		r++
	}

	return size === Infinity ? 0 : size
}
