/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
	let zeros = 1
	let l = 0
	let r = 0

	while (r < nums.length) {
		zeros -= nums[r] === 0 ? 1 : 0

		if (zeros < 0) zeros += nums[l++] === 0 ? 1 : 0

		r++
	}

	return r - l - 1
}
