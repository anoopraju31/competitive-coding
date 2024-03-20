/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
	const map = {}

	for (let num of nums) map[num] = map.hasOwnProperty(num) ? map[num] + 1 : 1

	const res = new Array(nums.length + 1).fill(0)

	for (let [key, value] of Object.entries(map)) {
		if (map[key] !== 0) res[value] = [key]
		else res[value].push(key)
	}

	const freq = []

	for (let i = res.length - 1; i >= 0; i--) {
		if (res[i] !== 0) freq.push(...res[i])
		if (freq.length === k) break
	}

	return freq
}
