/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function (nums) {
	for (let i = 0; i < nums.length - 1; i++)
		if ((nums[i] & 1) == (nums[i + 1] & 1)) return false

	return true
}
