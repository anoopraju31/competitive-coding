/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Brute Force
// Time: O(n^3)
// Space O(1)
var increasingTriplet = function (nums) {
	const n = nums.length

	for (let i = 0; i < n - 2; i++)
		for (let j = i + 1; j < n - 1; j++)
			for (let k = j + 1; k < n; k++)
				if (i < j && j < k && nums[i] < nums[j] && nums[j] < nums[k])
					return true

	return false
}

// Optimized
// Time: O(n)
// Space: O(1)
var increasingTriplet = function (nums) {
	if (nums.length < 3) return false

	let left = Infinity
	let mid = Infinity

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > mid) return true
		if (nums[i] < left && nums[i] < mid) left = nums[i]
		if (nums[i] > left) mid = nums[i]
	}

	return false
}
