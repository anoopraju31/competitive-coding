// Time: O(n)
// Space: O(n)
var singleNumber = function (nums) {
	const map = new Map()

	for (let n of nums) {
		map.set(n, map.has(n) ? map.get(n) + 1 : 1)
	}

	for (let [key, value] of map) {
		if (value === 1) return key
	}
}

const nums = [4, 1, 2, 1, 2]

console.log(singleNumber(nums))

// Time: O(n)
// Space: O(1)
// Bit Manipulation - XOR (^)
var singleNumber = function (nums) {
	let t = 0
	for (let num of nums) t ^= num

	return t
}
