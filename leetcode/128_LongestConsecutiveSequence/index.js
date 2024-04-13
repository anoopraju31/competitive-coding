/**
 * @param {number[]} nums
 * @return {number}
 */
// Time: O(nlogn)
// Space: O(1)
var longestConsecutive = function (nums) {
	if (nums.length <= 1) return nums.length

	let count = 1
	let maxCount = 1

	nums.sort((a, b) => a - b)

	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] + 1 === nums[i + 1]) count++
		else if (nums[i] === nums[i + 1]) continue
		else count = 1

		maxCount = Math.max(maxCount, count)
	}

	return maxCount
}

// Time: O(n)
// Space: O(n)
var longestConsecutive = function (nums) {
	if (nums.length <= 1) return nums.length

	const set = new Set()
	let count = 1

	for (let num of nums) set.add(num)

	for (let value of set.values())
		if (!set.has(value - 1) && set.has(value + 1)) {
			let k = 1

			while (set.has(value + k)) k++

			count = Math.max(count, k)
		}

	return count
}
