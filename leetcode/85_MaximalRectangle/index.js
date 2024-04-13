/**
 * @param {character[][]} matrix
 * @return {number}
 */
function largestRectangle(dp) {
	const stack = [-1]
	let maxArea = 0

	for (let i = 0; i <= dp.length; i++) {
		const val = i === dp.length ? -1 : dp[i]

		while (
			stack[stack.length - 1] !== -1 &&
			dp[stack[stack.length - 1]] > val
		) {
			const height = dp[stack.pop()]
			const width = i - stack[stack.length - 1] - 1
			maxArea = Math.max(maxArea, width * height)
		}

		stack.push(i)
	}

	return maxArea
}

var maximalRectangle = function (matrix) {
	const n = matrix.length

	if (n === 0) return 0

	const m = matrix[0].length

	if (n + m === 2) return matrix[0][0] === '1' ? 1 : 0

	const dp = Array(m).fill(0)
	let res = 0

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++)
			if (matrix[i][j] === '0') dp[j] = 0
			else dp[j]++

		res = Math.max(res, largestRectangle(dp))
	}

	return res
}
