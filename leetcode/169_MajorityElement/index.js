/**
 * @param {number[]} nums
 * @return {number}
 */
// Time: O(n)
// Space: O(n)
var majorityElement = function (nums) {
	const map = {}

	for (let n of nums) map[n] = map.hasOwnProperty(n) ? map[n] + 1 : 1

	let max = 0
	let num = -10_00_00_00_000

	for (const key of Object.keys(map))
		if (map[key] >= max) {
			max = map[key]
			num = key
		}

	return num
}
/**
 * @param {number[]} nums
 * @return {number}
 */
// Time: O(n)
// Space: O(1)
const majorityElement = (nums) => {
	let candidate = null
	let count = 0

	for (let num of nums) {
		if (count === 0) candidate = num
		count += candidate === num ? 1 : -1
	}

	return candidate
}

const nums = [
	47, 47, 72, 47, 72, 47, 79, 47, 12, 92, 13, 47, 47, 83, 33, 15, 18, 47, 47,
	47, 47, 64, 47, 65, 47, 47, 47, 47, 70, 47, 47, 55, 47, 15, 60, 47, 47, 47,
	47, 47, 46, 30, 58, 59, 47, 47, 47, 47, 47, 90, 64, 37, 20, 47, 100, 84, 47,
	47, 47, 47, 47, 89, 47, 36, 47, 60, 47, 18, 47, 34, 47, 47, 47, 47, 47, 22,
	47, 54, 30, 11, 47, 47, 86, 47, 55, 40, 49, 34, 19, 67, 16, 47, 36, 47, 41,
	19, 80, 47, 47, 27,
]

console.log(majorityElement(nums))
