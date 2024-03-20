/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	if (s.length !== t.length) return false

	const map = {}

	for (let i of s) map[i] = map.hasOwnProperty(i) ? map[i] + 1 : 1

	for (let i of t) {
		if (!map.hasOwnProperty(i)) return false
		if (map[i] === 0) return false

		map[i] -= 1
	}

	return true
}
