/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
	let prevMax = nums[0]
	let prevMin = nums[0]
	let result = nums[0]

	for (let i = 1; i < nums.length; i++) {
		let curMax = Math.max(nums[i], prevMax * nums[i], prevMin * nums[i])
		let curMin = Math.min(nums[i], prevMax * nums[i], prevMin * nums[i])

		prevMax = curMax
		prevMin = curMin

		result = Math.max(result, curMax)
	}

	return result
}
