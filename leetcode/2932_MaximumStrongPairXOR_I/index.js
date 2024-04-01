/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function (nums) {
	const n = nums.length
	let max = -Infinity

	for (let i = 0; i < n; i++)
		for (let j = i; j < n; j++)
			if (Math.abs(nums[i] - nums[j]) <= Math.min(nums[i], nums[j]))
				max = Math.max(nums[i] ^ nums[j], max)

	return max
}
