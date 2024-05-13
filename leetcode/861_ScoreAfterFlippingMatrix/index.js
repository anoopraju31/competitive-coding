/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function (grid) {
	const rows = grid.length
	const cols = grid[0].length
	let res = rows * 2 ** (cols - 1)

	for (let c = 1; c < cols; c++) {
		let cnt = 0

		for (let r = 0; r < rows; r++) if (grid[r][c] != grid[r][0]) cnt += 1

		cnt = Math.max(cnt, rows - cnt)
		res += cnt * 2 ** (cols - c - 1)
	}

	return res
}
