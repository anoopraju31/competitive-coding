/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
	const rows = matrix.length
	const cols = matrix[0].length
	const memo = {}
	let max = 0

	const helper = (r, c) => {
		if (r >= rows || c >= cols) return 0
		if (!memo.hasOwnProperty(`${r}-${c}`)) {
			let down = helper(r + 1, c)
			let right = helper(r, c + 1)
			let diagonal = helper(r + 1, c + 1)

			memo[`${r}-${c}`] = 0

			if (matrix[r][c] == '1')
				memo[`${r}-${c}`] = 1 + Math.min(down, right, diagonal)

			max = Math.max(max, memo[`${r}-${c}`])
		}

		return memo[`${r}-${c}`]
	}

	helper(0, 0)

	return max ** 2
}
