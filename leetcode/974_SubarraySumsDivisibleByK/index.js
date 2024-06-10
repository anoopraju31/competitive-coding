/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
	const sum = { 0: 1 }
	let count = 0
	let checkSum = 0
	let mod = 0

	for (let n of nums) {
		checkSum += n
		mod = ((checkSum % k) + k) % k

		if (sum.hasOwnProperty(mod)) count += sum[mod]

		sum[mod] = sum[mod] + 1 || 1
	}

	return count
}
