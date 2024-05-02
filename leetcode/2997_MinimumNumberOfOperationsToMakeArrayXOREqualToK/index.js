/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
	const oneBits = new Array(32).fill(0)

	for (const num of nums)
		for (let i = 0; i < 32; i++) if (num & (1 << i)) oneBits[i]++

	let ans = 0

	for (let i = 0; i < 32; i++)
		if (k & (1 << i)) ans += oneBits[i] % 2 === 0
		else ans += oneBits[i] % 2 === 1

	return ans
}
