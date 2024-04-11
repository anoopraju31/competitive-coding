/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
	const res = new Array(nums.length).fill(Infinity)
	res[nums.length - 1] = 0

	for (let i = nums.length - 2; i >= 0; i--) {
		let n = nums[i]

		while (n) {
			if (i + n < nums.length) res[i] = Math.min(res[i], res[i + n] + 1)
			n--
		}
	}

	return res[0]
}
