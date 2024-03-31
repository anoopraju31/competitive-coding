/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minimumSubarrayLength = (nums, k) => {
	let count = Infinity
	let sub

	for (let r = 0; r < nums.length; r++) {
		if (nums[r] >= k) return 1

		sub = 0
		for (let i = r; i >= 0; i--) {
			sub |= nums[i]
			if (sub >= k) {
				count = Math.min(count, r - i + 1)
				break
			}
		}
	}

	return count !== Infinity ? count : -1
}
