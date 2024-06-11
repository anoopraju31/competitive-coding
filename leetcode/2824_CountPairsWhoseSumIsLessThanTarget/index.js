/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Binary Search
const countPairs = (nums, target) => {
	const search = (k, beg, end) => {
		if (nums[beg] >= k) return 0
		if (nums[end] < k) return end - beg + 1

		let l = beg
		let r = end

		while (l < r - 1) {
			mid = Math.floor((l + r) / 2)

			if (nums[mid] < k) l = mid
			else r = mid
		}

		return r
	}

	nums.sort((a, b) => a - b)

	let ans = 0

	for (let i = 1; i < nums.length; i++)
		ans += search(target - nums[i], 0, i - 1)

	return ans
}
