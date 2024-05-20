/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
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

	let sum = 0

	for (const subset of subsets) {
		if (subset.length === 0) continue

		let xor = subset[0]

		for (let i = 1; i < subset.length; i++) xor ^= subset[i]

		sum += xor
	}

	return sum
}

var subsetXORSum = function (nums) {
	let res = 0

	for (const num of nums) res = res | num

	return res * 2 ** (nums.length - 1)
}
