/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
	const ans = []
	const leftSum = new Array(nums.length)
	const rightSum = new Array(nums.length)

	let sum = 0

	for (let i = 0; i < nums.length; i++) {
		leftSum[i] = sum
		sum += nums[i]
	}

	sum = 0

	for (let i = nums.length - 1; i >= 0; i--) {
		rightSum[i] = sum
		sum += nums[i]
	}

	for (let i = 0; i < nums.length; i++)
		ans.push(Math.abs(leftSum[i] - rightSum[i]))

	return ans
}

var leftRightDifference = function (nums) {
	let rightSum = 0
	let leftSum = 0
	const ans = []

	for (let num of nums) rightSum += num

	for (let i = 0; i < nums.length; i++) {
		rightSum -= nums[i]
		ans.push(Math.abs(leftSum - rightSum))
		leftSum += nums[i]
	}

	return ans
}
