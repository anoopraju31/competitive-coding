/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
	let sum = 0

	for (let i = 0; i < k; i++) sum += nums[i]

	let avg = sum / k

	if (nums.length === k) return avg

	let i = 1
	while (i <= nums.length - k) {
		sum += nums[i + k - 1] - nums[i - 1]
		avg = Math.max(avg, sum / k)
		i++
	}

	return avg
}

var findMaxAverage = function (nums, k) {
	let sum = 0

	for (let i = 0; i < k; i++) sum += nums[i]

	let max = sum

	for (let i = k; i < nums.length; i++) {
		sum += nums[i] - nums[i - k]
		max = Math.max(max, sum)
	}

	return max / k
}
