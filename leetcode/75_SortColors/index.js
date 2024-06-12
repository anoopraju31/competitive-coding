/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Time: O(n)
// Space: O(n)
var sortColors = function (nums) {
	const n = nums.length
	const map = {}

	for (const num of nums) map[num] = map[num] + 1 || 1

	let key = 0
	let i = 0

	while (i < n) {
		while (!map[key] || map[key] === 0) key++

		nums[i++] = key
		map[key]--
	}
}

// Time: O(n)
// Space: O(1)
const sortColors = (nums) => {
	let l = 0
	let r = nums.length - 1
	let i = 0

	const swap = (i, j) => {
		let temp = nums[i]
		nums[i] = nums[j]
		nums[j] = temp
	}

	while (i <= r) {
		if (nums[i] === 0) {
			swap(i, l)
			l++
		} else if (nums[i] === 2) {
			swap(i, r)
			r--
			i--
		}

		i++
	}
}
