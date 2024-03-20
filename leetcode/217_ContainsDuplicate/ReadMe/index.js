/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	const map = {}

	for (let num of nums) map[num] = map.hasOwnProperty(num) ? map[num] + 1 : 1

	for (let key of Object.keys(map)) if (map[key] >= 2) return true

	return false
}

var containsDuplicate = function (nums) {
	const set = new Set(nums)

	return set.size !== nums.length
}
