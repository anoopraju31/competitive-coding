/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function (nums, k) {
	// Helper function to create a counter object similar to Python's Counter
	function createCounter(arr) {
		const counter = {}
		for (const num of arr) {
			counter[num] = (counter[num] || 0) + 1
		}
		return counter
	}

	const cnt = createCounter(nums)
	const groups = []
	const visit = new Set()
	const cache = {}

	function helper(n, g) {
		if (!(n in g)) return 1
		if (n in cache) return cache[n]

		const skip = helper(n + k, g)
		const include = (Math.pow(2, g[n]) - 1) * helper(n + 2 * k, g)
		cache[n] = skip + include

		return skip + include
	}

	for (const n in cnt) {
		let num = parseInt(n)
		if (visit.has(num)) continue

		const g = {}

		while (num - k in cnt) num -= k
		while (num in cnt) {
			g[num] = cnt[num]
			visit.add(num)
			num += k
		}

		groups.push(g)
	}

	let res = 1

	for (const g of groups) {
		const n = Math.min(...Object.keys(g).map(Number))
		res *= helper(n, g)
	}

	return res - 1
}
