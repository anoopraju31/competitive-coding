var numIslands = function (grid) {
	const ROWS = grid.length
	const COLS = grid[0].length
	const visited = new Set()
	let count = 0

	const bfs = (r, c) => {
		const directions = [
			[1, 0],
			[0, 1],
			[-1, 0],
			[0, -1],
		]
		const queue = []

		queue.push([r, c])
		visited.add(`${r}-${c}`)

		while (queue.length) {
			let [row, col] = queue.shift()

			for (const [dr, dc] of directions) {
				const r = row + dr
				const c = col + dc

				if (
					r >= 0 &&
					r < ROWS &&
					c >= 0 &&
					c < COLS &&
					grid[r][c] === '1' &&
					!visited.has(`${r}-${c}`)
				) {
					queue.push([r, c])
					visited.add(`${r}-${c}`)
				}
			}
		}
	}

	for (let r = 0; r < ROWS; r++)
		for (let c = 0; c < COLS; c++)
			if (grid[r][c] === '1' && !visited.has(`${r}-${c}`)) {
				bfs(r, c)
				count++
			}

	return count
}

// const grid = [
// 	['1', '1', '1', '1', '0'],
// 	['1', '1', '0', '1', '0'],
// 	['1', '1', '0', '0', '0'],
// 	['0', '0', '0', '0', '0'],
// ]
const grid = [
	['0', '1', '0'],
	['1', '0', '1'],
	['0', '1', '0'],
]
console.log(numIslands(grid))
