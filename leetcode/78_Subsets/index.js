/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
	const n = nums.length
	const subsets = []
	const subset = []

	const getSubsets = (idx) => {
		if (idx === n) {
			subsets.push([...subset])
			return
		}

		subset.push(nums[idx])
		getSubsets(idx + 1)

		subset.pop()
		getSubsets(idx + 1)
	}

	getSubsets(0)

	return subsets
}
