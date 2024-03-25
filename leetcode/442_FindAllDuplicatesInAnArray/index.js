/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Brute Force
// Time: O(n^2)
// Space: O(1)
var findDuplicates = function (nums) {
	const res = []

	for (let i = 0; i < nums.length - 1; i++)
		for (let j = i + 1; j < nums.length; j++)
			if (nums[i] === nums[j]) res.push(nums[i])

	return res
}

// Time: O(N)
// Space: O(N)
var findDuplicates = function (nums) {
	const map = {}

	for (let num of nums) map[num] = map[num] + 1 || 1

	const res = []
	for (let key of Object.keys(map)) if (map[key] > 1) res.push(key)

	return res
}

// Time: O(N)
// Space: O(1)
// Since we can't use any extra space, we can utilize the nums array.
// The nums array is expected to have element between [1, n] where n is the length of the array.

var findDuplicates = function (nums) {
	const res = []
	for (let i = 0; i < nums.length; i++) {
		const idx = Math.abs(nums[i]) - 1
		if (nums[idx] < 0) res.push(idx + 1)
		else nums[idx] *= -1
	}

	return res
}
