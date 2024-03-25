/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
	let low = 0
	let high = numbers.length - 1
	let sum = 0

	while (low < high) {
		sum = numbers[low] + numbers[high]

		if (sum === target) break
		if (sum > target) high--
		else low++
	}

	return [low + 1, high + 1]
}
