/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function (nums, queries) {
	const sameParity = []

	for (let i = 0; i < nums.length - 1; i++)
		if ((nums[i] & 1) == (nums[i + 1] & 1)) sameParity.push(i)

	const ans = []

	for (const [start, end] of queries) {
		let l = 0
		let r = nums.length - 1
		let isSpecial = true

		while (l <= r) {
			let mid = Math.floor((l + r) / 2)

			if (sameParity[mid] >= start && sameParity[mid] < end) {
				isSpecial = false
				break
			}

			if (sameParity[mid] < start) l = mid + 1
			else r = mid - 1
		}

		ans.push(isSpecial)
	}

	return ans
}
