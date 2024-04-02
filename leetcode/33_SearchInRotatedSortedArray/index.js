/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Binary Search
// Time: O(logn)
// Space: O(1)
var search = function (nums, target) {
	let l = 0
	let r = nums.length - 1

	while (l <= r) {
		let m = Math.floor((l + r) / 2)

		if (nums[m] === target) return m
		if (nums[r] > nums[m]) {
			if (target > nums[m] && target <= nums[r]) l = m + 1
			else r = m - 1
		} else {
			if (target < nums[m] && target >= nums[l]) r = m - 1
			else l = m + 1
		}
	}

	return -1
}
