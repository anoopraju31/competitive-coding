/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
	if (nums.length === 1 && nums[0] === 0) return [0]

	let count = 0
	let maxBits = 0

	for (let n of nums) {
		let bits = 0

		while (n) {
			count += n & 1 // add 1 if n is odd
			bits++
			n >>= 1 // Shift by one
		}

		if (bits > maxBits) maxBits = bits
	}

	return count + maxBits - 1
}
