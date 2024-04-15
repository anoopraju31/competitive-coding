/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
	let maxCount = 0
	let count = 0
	let zeros = 0
	let l = 0

	for (let r = 0; r < nums.length; r++) {
		if (nums[r] === 0) zeros++

		while (zeros > k) {
			if (nums[l] === 0) zeros--
			l++
		}

		count = r - l + 1
		maxCount = Math.max(count, maxCount)
	}

	return maxCount
}
