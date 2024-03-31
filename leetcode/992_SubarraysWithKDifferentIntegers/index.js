/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function (nums, k) {
	const count = new Map()
	let res = 0
	let leftNear = 0
	let leftFar = 0

	for (let r = 0; r < nums.length; r++) {
		const num = nums[r]
		count.set(num, (count.get(num) || 0) + 1)

		while (count.size > k) {
			const leftNum = nums[leftNear]
			count.set(leftNum, count.get(leftNum) - 1)
			if (count.get(leftNum) === 0) {
				count.delete(leftNum)
			}
			leftNear++
			leftFar = leftNear
		}

		while (count.get(nums[leftNear]) > 1) {
			count.set(nums[leftNear], count.get(nums[leftNear]) - 1)
			leftNear++
		}

		if (count.size === k) {
			res += leftNear - leftFar + 1
		}
	}

	return res
}
