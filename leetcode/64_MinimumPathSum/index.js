/**
 * @param {number[][]} grid
 * @return {number}
 */

var minPathSum = function (grid) {
	const n = grid.length
	const m = grid[0].length
	const memo = new Array(n)

	for (let i = 0; i < n; i++) memo[i] = new Array(m).fill(-1)

	const getPath = (i, j) => {
		if (i >= n || j >= m) return Infinity
		if (i == n - 1 && j == m - 1) return grid[i][j]
		if (memo[i][j] !== -1) return memo[i][j]
		memo[i][j] = grid[i][j] + Math.min(getPath(i + 1, j), getPath(i, j + 1))
		return memo[i][j]
	}

	return getPath(0, 0)
}
