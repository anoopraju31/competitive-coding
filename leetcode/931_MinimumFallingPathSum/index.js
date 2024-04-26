/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
	const rows = matrix.length
	const cols = matrix[0].length
	const sum = new Array(rows)

	for (let r = 0; r < rows; r++) sum[r] = new Array(cols)

	for (let r = rows - 1; r >= 0; r--) {
		for (let c = 0; c < cols; c++) {
			if (r === rows - 1) sum[r][c] = matrix[r][c]
			else {
				let minVal = 0

				// starting element of the row
				if (c === 0) minVal = Math.min(sum[r + 1][c], sum[r + 1][c + 1])
				// ending element of the row
				else if (c === cols - 1)
					minVal = Math.min(sum[r + 1][c - 1], sum[r + 1][c])
				// elements between starting and ending of the row
				else
					minVal = Math.min(sum[r + 1][c - 1], sum[r + 1][c], sum[r + 1][c + 1])

				sum[r][c] = minVal + matrix[r][c]
			}
		}
	}

	let minSum = Infinity

	for (let c = 0; c < cols; c++) if (sum[0][c] < minSum) minSum = sum[0][c]

	return minSum
}
