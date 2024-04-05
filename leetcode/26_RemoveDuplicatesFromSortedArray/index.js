/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	let count = 0

	for (let i = 0; i < nums.length; i++) {
		if (i < nums.length && nums[i] === nums[i + 1]) continue

		nums[count++] = nums[i]
	}

	return count
}
