/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
	const isAvailable = grid.map((row) => row.map((cell) => cell !== 0))
	const rows = grid.length
	const cols = grid[0].length
	let max = 0
	let sum = 0

	const walk = (i, j) => {
		if (i < 0 || i > rows - 1 || j < 0 || j > cols - 1 || !isAvailable[i][j])
			return

		sum += grid[i][j]
		max = Math.max(max, sum)
		isAvailable[i][j] = false

		walk(i, j + 1)
		walk(i + 1, j)
		walk(i, j - 1)
		walk(i - 1, j)

		sum -= grid[i][j]

		isAvailable[i][j] = true
	}

	grid.forEach((row, i) => {
		row.forEach((cell, j) => walk(i, j))
	})

	return max
}
