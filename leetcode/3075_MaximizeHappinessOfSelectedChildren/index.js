/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
// Time: O(n * logn)
// Space: O(1)
var maximumHappinessSum = function (happiness, k) {
	happiness.sort((a, b) => a - b)

	let sum = 0
	let c = 0
	let i = happiness.length - 1

	while (i >= 0 && k > 0) {
		if (happiness[i] - c <= 0) break
		sum += happiness[i] - c
		c++
		i--
		k--
	}

	return sum
}
