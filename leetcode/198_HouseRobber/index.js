/**
 * @param {number[]} nums
 * @return {number}
 */
// Time = O(n)
// Space = O(n)
var rob = function (nums) {
	const n = nums.length

	if (n === 1) return nums[0]
	if (n === 2) return Math.max(nums[0], nums[1])

	const dp = new Array(n)
	dp[0] = nums[0]
	dp[1] = Math.max(nums[0], nums[1])

	for (let i = 2; i < n; i++) {
		dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1])
	}

	return dp[n - 1]
}

// Time = O(n)
// Space = O(1)
var rob = function (nums) {
	const n = nums.length

	if (n === 1) return nums[0]
	if (n === 2) return Math.max(nums[0], nums[1])

	let p1 = nums[0]
	let p2 = Math.max(nums[0], nums[1])
	let current

	for (let i = 2; i < n; i++) {
		current = Math.max(nums[i] + p1, p2)
		p1 = p2
		p2 = current
	}

	return current
}
