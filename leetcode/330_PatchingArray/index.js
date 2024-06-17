/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function (nums, n) {
	let i = 0
	let upto = 0
	let res = 0

	while (upto < n) {
		if (i < nums.length && nums[i] <= upto + 1) upto += nums[i++]
		else {
			res++
			upto += upto + 1
		}
	}

	return res
}
