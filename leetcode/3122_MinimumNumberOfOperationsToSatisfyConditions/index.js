/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperations = function (grid) {
	const rows = grid.length
	const cols = grid[0].length
	const freqOfRows = []

	for (let c = 0; c < cols; c++) {
		const currFreq = new Array(10).fill(0)

		for (let r = 0; r < rows; r++) currFreq[grid[r][c]]++

		freqOfRows.push(currFreq)
	}

	let prevMoves = new Array(10).fill(0)

	for (let c = 0; c < cols; c++) {
		const currMoves = prevMoves.slice(0)

		for (let currMake = 0; currMake < 10; currMake++) {
			let beforeMin = Infinity

			for (let prevNum = 0; prevNum < 10; prevNum++) {
				if (prevNum === currMake) continue

				beforeMin = Math.min(beforeMin, prevMoves[prevNum])
			}

			currMoves[currMake] = beforeMin + rows - freqOfRows[c][currMake]
		}

		prevMoves = currMoves
	}

	let minMoves = Infinity

	for (let moves of prevMoves) if (moves < minMoves) minMoves = moves

	return minMoves
}
