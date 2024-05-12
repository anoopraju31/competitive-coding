/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
	const n = grid.length
	const res = []

	for (let i = 1; i < n - 1; i++) {
		const row = []

		for (let j = 1; j < n - 1; j++) {
			let val = 0

			if (val < grid[i - 1][j - 1]) val = grid[i - 1][j - 1]
			if (val < grid[i - 1][j]) val = grid[i - 1][j]
			if (val < grid[i - 1][j + 1]) val = grid[i - 1][j + 1]
			if (val < grid[i][j - 1]) val = grid[i][j - 1]
			if (val < grid[i][j]) val = grid[i][j]
			if (val < grid[i][j + 1]) val = grid[i][j + 1]
			if (val < grid[i + 1][j - 1]) val = grid[i + 1][j - 1]
			if (val < grid[i + 1][j]) val = grid[i + 1][j]
			if (val < grid[i + 1][j + 1]) val = grid[i + 1][j + 1]

			row.push(val)
		}
		res.push(row)
	}

	return res
}
