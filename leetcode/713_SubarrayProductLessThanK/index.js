/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
	if (k <= 0) return 0

	const n = nums.length
	let i = 0
	let j = 0
	let sum = 0
	let product = 1

	while (i < n) {
		j = i
		product = 1

		while (j < n) {
			product *= nums[j]
			if (product >= k) break
			sum++
			j++
		}
		i++
	}

	return sum
}

var numSubarrayProductLessThanK = function (nums, k) {
	if (k <= 0) return 0

	const n = nums.length
	let product = 1
	let result = 0
	let left = 0
	let right = 0

	while (right < n) {
		product *= nums[right]

		while (product >= k) {
			product /= nums[left]
			left++
		}

		result += right - left + 1
		right++
	}

	return result
}
