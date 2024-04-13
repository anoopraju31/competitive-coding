/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
	let count = 0
	let maxCount = 0

	for (let p of gain) {
		count += p
		maxCount = Math.max(maxCount, count)
	}

	return maxCount
}
