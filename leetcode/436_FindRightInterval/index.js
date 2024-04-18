/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals) {
	const res = new Array(intervals.length)
	const map = {}

	for (let i = 0; i < intervals.length; i++) map[intervals[i][0]] = i

	const sortedKeys = Object.keys(map)
		.map((k) => Number(k))
		.sort((a, b) => a - b)

	const search = (key) => {
		let l = 0
		let r = sortedKeys.length - 1

		while (l <= r) {
			let mid = Math.floor((l + r) / 2)

			if (sortedKeys[mid] === key) return map[sortedKeys[mid]]
			if (key <= 0 && sortedKeys[mid] < key && key < sortedKeys[mid - 1])
				return map[sortedKeys[mid - 1]]
			if (key > 0 && sortedKeys[mid] < key && key < sortedKeys[mid + 1])
				return map[sortedKeys[mid + 1]]

			if (sortedKeys[mid] > key) r = mid - 1
			else l = mid + 1
		}

		return -1
	}

	for (let i = 0; i < intervals.length; i++) res[i] = search(intervals[i][1])

	return res
}
