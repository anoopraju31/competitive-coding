/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function (nums) {
	let res
	const doubles = {}

	for (let num of nums) {
		if (doubles[num]) {
			if (!res) res = num
			else res ^= num
		} else {
			doubles[num] = true
		}
	}

	return res ? res : 0
}
