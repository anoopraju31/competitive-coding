/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
	let l = 0
	let r = nums.length - 1
	let leftBound = -1
	let rightBound = -1

	while (l <= r) {
		let mid = Math.floor((l + r) / 2)

		if (nums[mid] === target && nums[mid - 1] !== target) leftBound = mid
		if (nums[mid] < target) l = mid + 1
		else r = mid - 1
	}

	l = 0
	r = nums.length - 1

	while (l <= r) {
		let mid = Math.floor((l + r) / 2)

		if (nums[mid] === target && nums[mid + 1] !== target) rightBound = mid
		if (nums[mid] <= target) l = mid + 1
		else r = mid - 1
	}

	return [leftBound, rightBound]
}
