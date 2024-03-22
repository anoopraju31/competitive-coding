/**
 * @param {number[]} nums
 * @return {number}
 */

// Time: O(n)
// Space: O(n)
var findDuplicate = function (nums) {
	const map = {}
	for (let num of nums) map[num] = map[num] + 1 || 1

	for (let [key, value] of Object.entries(map)) if (value > 1) return key
}

// Time: O(n)
// Space: O(1)
var findDuplicate = function (nums) {
	let slow = 0
	let fast = 0

	do {
		slow = nums[slow]
		fast = nums[nums[fast]]
	} while (slow !== fast)

	slow = 0
	while (slow !== fast) {
		slow = nums[slow]
		fast = nums[fast]
	}

	return slow
}
