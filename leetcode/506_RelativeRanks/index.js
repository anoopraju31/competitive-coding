/**
 * @param {number[]} score
 * @return {string[]}
 */
// Time: O(nlogn)
// Space: O(n)
var findRelativeRanks = function (score) {
	const n = score.length
	const sortedScores = score
		.slice(0)
		.map((s, i) => [s, i])
		.sort((a, b) => b[0] - a[0])

	const ans = new Array(n)

	for (let i = 0; i < n; i++) {
		if (i === 0) ans[sortedScores[i][1]] = 'Gold Medal'
		else if (i === 1) ans[sortedScores[i][1]] = 'Silver Medal'
		else if (i === 2) ans[sortedScores[i][1]] = 'Bronze Medal'
		else ans[sortedScores[i][1]] = String(i + 1)
	}

	return ans
}
