/**
 * @param {number[][]} grid
 * @return {number}
 */
// Binary Search Approach
// Time: O(mlogn)
// Space: O(!)
var countNegatives = function (grid) {
	const n = grid[0].length
	let count = 0
	let l = 0
	let r = n - 1

	for (let row of grid) {
		if (row[n - 1] > 0) continue
		if (row[0] < 0) {
			count += n
			continue
		}
		l = 0
		r = n - 1

		while (l <= r) {
			let mid = Math.floor((l + r) / 2)

			if (row[mid] < 0) {
				while (row[mid] < 0) mid--
				count += n - mid - 1
				break
			}
			l = mid + 1
		}
	}

	return count
}

// Time O(m + n)
// Space O(1)
// Note: Grid is sorted in non-increasing order both row-wise and column-wise.
// Start from top right and move towards left if element is less than zero else go down
var countNegatives = function (matrix) {
	let count = 0
	const rows = matrix.length
	const cols = matrix[0].length

	// Start from the bottom-left corner
	let i = 0
	let j = cols - 1

	while (j >= 0 && i < rows) {
		// If the current element is negative, all elements to its right are also negative
		if (matrix[i][j] < 0) {
			count += rows - i
			j--
		} else {
			// If the current element is non-negative, move to the right
			i++
		}
	}

	return count
}
