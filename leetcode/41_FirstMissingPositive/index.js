/**
 * @param {number[]} nums
 * @return {number}
 */
// Time: O(n)
// Space: O(n)
var firstMissingPositive = function (nums) {
	const set = new Set(nums)
	const arr = []

	for (let num of set.values()) arr.push(num)

	const sortedNums = arr.sort((a, b) => a - b)
	let smallestNum = 1

	for (let i = 0; i < sortedNums.length; i++) {
		if (sortedNums[i] <= 0) continue
		if (smallestNum < sortedNums[i]) return smallestNum
		smallestNum++
	}

	return smallestNum
}

// Time: O(n)
// Space: O(n)
var firstMissingPositive = function (nums) {
	const n = nums.length
	const arr = new Array(n + 1).fill(false)

	for (let num of nums) if (num <= n + 1 && num > 0) arr[num - 1] = true

	for (let i = 0; i <= n; i++) if (!arr[i]) return i + 1
}

// Most Optimal Solution
// Time: O(n)
// Space: O(1)
var firstMissingPositive = function (nums) {
	const n = nums.length

	for (let i = 0; i < n; i++) {
		if (nums[nums[i] - 1] !== nums[i]) {
			let temp = nums[nums[i] - 1]
			nums[nums[i] - 1] = nums[i]
			nums[i] = temp
			i--
		}
	}

	for (let i = 0; i < n; i++) if (nums[i] !== i + 1) return i + 1

	return n + 1
}
