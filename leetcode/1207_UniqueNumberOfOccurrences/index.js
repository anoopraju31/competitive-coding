/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
	const map = {}

	for (let num of arr) map[num] = map.hasOwnProperty(num) ? map[num] + 1 : 1

	const set = new Set(Object.values(map))

	return Object.values(map).length === set.size
}
