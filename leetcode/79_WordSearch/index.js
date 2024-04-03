/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
	const row = board.length
	const col = board[0].length
	const dfs = (r, c, i) => {
		if (word.length === i) return true
		if (r < 0 || r >= row || c < 0 || c >= col || board[r][c] !== word[i])
			return false

		board[r][c] = '$'

		if (
			dfs(r + 1, c, i + 1) ||
			dfs(r - 1, c, i + 1) ||
			dfs(r, c + 1, i + 1) ||
			dfs(r, c - 1, i + 1)
		)
			return true

		board[r][c] = word[i]
	}

	for (let r = 0; r < row; r++)
		for (let c = 0; c < col; c++)
			if (board[r][c] === word[0] && dfs(r, c, 0)) return true

	return false
}
