/**
 * @param {number[]} nums
 * @return {number}
 */
// Time: O(n^2)
// Space: O(1)
var findLHS = function (nums) {
	const n = nums.length
	let l = 0
	let r = 1
	let countMin = 0
	let countMax = 0
	let maxCount = 0
	let isMaxVal = false
	let isMinVal = false

	while (l < n - 1) {
		r = l + 1
		countMin = 1
		countMax = 1

		while (r < n) {
			if (nums[r] === nums[l] + 1 || nums[l] === nums[r]) {
				if (nums[r] > nums[l]) isMaxVal = true
				countMax++
			}

			if (nums[r] === nums[l] - 1 || nums[l] === nums[r]) {
				if (nums[r] < nums[l]) isMinVal = true
				countMin++
			}

			r++
		}

		countMin = countMin === 1 || !isMinVal ? 0 : countMin
		countMax = countMax === 1 || !isMaxVal ? 0 : countMax
		maxCount = Math.max(maxCount, Math.max(countMin, countMax))

		isMinVal = false
		isMaxVal = false
		l++
	}

	return maxCount
}

/**
 * @param {number[]} nums
 * @return {number}
 */
// Time: O(n)
// Space: O(n)
var findLHS = function (nums) {
	const map = new Map()

	for (let num of nums) map.set(num, map.get(num) + 1 || 1)

	if (map.size <= 1) return 0

	let max = 0

	for (let key of map.keys())
		if (map.has(key + 1)) max = Math.max(max, map.get(key) + map.get(key + 1))

	return max
}
