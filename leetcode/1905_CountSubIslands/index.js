/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
	const m = grid1.length
	const n = grid1[0].length
	const visited = new Set()
	let count = 0

	const bfs = (r, c) => {
		const queue = []
		const directions = [
			[1, 0],
			[0, 1],
			[-1, 0],
			[0, -1],
		]

		queue.push([r, c])
		visited.add(`${r}-${c}`)
		let check = true

		while (queue.length) {
			const [row, col] = queue.shift()

			for (const [dr, dc] of directions) {
				const r = row + dr
				const c = col + dc

				if (
					r >= 0 &&
					r < m &&
					c >= 0 &&
					c < n &&
					grid2[r][c] === 1 &&
					!visited.has(`${r}-${c}`)
				) {
					if (grid1[r][c] !== grid2[r][c]) check = false

					queue.push([r, c])
					visited.add(`${r}-${c}`)
				}
			}
		}

		if (check) count++
	}

	for (let r = 0; r < m; r++)
		for (let c = 0; c < n; c++)
			if (grid2[r][c] === 1 && grid1[r][c] === 1 && !visited.has(`${r}-${c}`))
				bfs(r, c)

	return count
}
