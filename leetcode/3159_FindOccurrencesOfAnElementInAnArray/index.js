/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @param {number} x
 * @return {number[]}
 */
var occurrencesOfElement = function (nums, queries, x) {
	const n = nums.length
	const places = []

	for (let i = 0; i < n; i++) if (nums[i] === x) places.push(i)

	const occurrence = places.length
	const ans = []

	for (let i = 0; i < queries.length; i++) {
		if (queries[i] <= occurrence) ans.push(places[queries[i] - 1])
		else ans.push(-1)
	}

	return ans
}
