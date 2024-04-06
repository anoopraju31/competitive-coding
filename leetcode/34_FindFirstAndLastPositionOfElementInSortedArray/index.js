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

// Binary Search
// Time: O(logn)
// Space: O(1)
// if target found, mid may be somewhere between the starting and ending index so check both ways until no equal the target and return the index.
var searchRange = function (nums, target) {
	let l = 0
	let r = nums.length - 1

	while (l <= r) {
		let mid = Math.floor((l + r) / 2)

		if (nums[mid] === target) {
			let t = mid
			while (nums[t] === target) t--
			while (nums[mid] === target) mid++

			return [t + 1, mid - 1]
		} else if (nums[mid] < target) l = mid + 1
		else r = mid - 1
	}

	return [-1, -1]
}
