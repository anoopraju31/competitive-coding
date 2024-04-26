// const minFallingPathSum = (grid) => {
// 	const rows = grid.length
// 	const cols = grid[0].length
// 	const sums = {}

// 	const getSum = (r, c, sum) => {
// 		if (r >= rows) return sum

// 		let minSum = Infinity

// 		for (let i = 0; i < cols; i++) {
// 			if (i === c) continue
// 			if (!sums[`${r + 1}-${i}`]) sums[`${r + 1}-${i}`] = getSum(r + 1, i, sum)
// 			if (sums[`${r + 1}-${i}`] < minSum) minSum = sums[`${r + 1}-${i}`]
// 		}

// 		sums[`${r}-${c}`] = minSum + grid[r][c]

// 		return sums[`${r}-${c}`]
// 	}

// 	for (let c = 0; c < cols; c++) {
// 		getSum(0, c, 0)
// 	}

// 	console.log(sums)
// }

const minFallingPathSum = (grid) => {
	const rows = grid.length
	const cols = grid[0].length
	const sums = new Array(rows)

	for (let r = 0; r < rows; r++) sums[r] = new Array(cols)

	const getSum = (r, c, sum) => {
		if (r + 1 === rows) return grid[r][c]

		let minSum = Infinity

		for (let i = 0; i < cols; i++) {
			if (i === c) continue
			if (r < rows && !sums[r + 1][i]) sums[r + 1][i] = getSum(r + 1, i, sum)
			if (r < rows && sums[r + 1][i] < minSum) minSum = sums[r + 1][i]
		}

		sums[r][c] = minSum + grid[r][c]

		return sums[r][c]
	}

	for (let c = 0; c < cols; c++) {
		getSum(0, c, 0)
	}

	let minSum = Infinity
	for (let c = 0; c < cols; c++) if (sums[0][c] < minSum) minSum = sums[0][c]

	return minSum
}

const grid = [
	[-73, 61, 43, -48, -36],
	[3, 30, 27, 57, 10],
	[96, -76, 84, 59, -15],
	[5, -49, 76, 31, -7],
	[97, 91, 61, -46, 67],
]

// [
// 	[-73, 61, 43, -48, -36],
// 	[3, 30, 27, 57, 10],
// 	[96, -76, 84, 59, -15],
// 	[5, -49, 76, 31, -7],
// 	[97, 91, 61, -46, 67],
// ]

console.log(minFallingPathSum(grid))
