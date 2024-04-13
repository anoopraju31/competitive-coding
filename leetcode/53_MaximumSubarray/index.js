/**
 * @param {number[]} nums
 * @return {number}
 */
// Kadane's Algorithm
// Time: O(n)
// Space: O(1)
var maxSubArray = function (nums) {
	let sum = 0
	let maxSum = -Infinity

	for (let num of nums) {
		sum += num

		if (sum > maxSum) maxSum = sum
		if (sum < 0) sum = 0
	}

	return maxSum
}
