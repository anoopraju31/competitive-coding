/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
	nums.sort((a, b) => a - b)

	let count = 0
	let l = 0
	let r = nums.length - 1

	while (l < r) {
		let sum = nums[l] + nums[r]

		if (sum === k) {
			count++
			l++
			r--
		} else if (sum > k) r--
		else l++
	}

	return count
}
