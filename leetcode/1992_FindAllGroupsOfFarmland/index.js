/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function (land) {
	const m = land.length
	const n = land[0].length
	const visited = new Set()

	const bfs = (r, c) => {
		const queue = []
		const directions = [
			[-1, 0],
			[0, 1],
			[1, 0],
			[0, -1],
		]

		queue.push([r, c])
		visited.add(`${r}-${c}`)

		let topLeft = [r, c]
		let bottomRight = [r, c]

		while (queue.length) {
			const [row, col] = queue.shift()

			if (row > bottomRight[0] || col > bottomRight[1]) bottomRight = [row, col]

			for (const [dr, dc] of directions) {
				const r = row + dr
				const c = col + dc

				if (
					r >= 0 &&
					r < m &&
					c >= 0 &&
					c < n &&
					land[r][c] === 1 &&
					!visited.has(`${r}-${c}`)
				) {
					queue.push([r, c])
					visited.add(`${r}-${c}`)
				}
			}
		}

		return [...topLeft, ...bottomRight]
	}

	const ans = []

	for (let r = 0; r < m; r++)
		for (let c = 0; c < n; c++)
			if (land[r][c] === 1 && !visited.has(`${r}-${c}`)) ans.push(bfs(r, c))

	return ans
}
