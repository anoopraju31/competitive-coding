/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
	const reminder = { 0: -1 }
	let total = 0

	for (let i = 0; i < nums.length; i++) {
		total += nums[i]
		let r = total % k

		if (!reminder.hasOwnProperty(r)) reminder[r] = i
		else if (i - reminder[r] > 1) return true
	}

	return false
}
