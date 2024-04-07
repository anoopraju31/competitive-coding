/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
	const map = {}

	for (let mag of magazine) map[mag] = map[mag] + 1 || 1

	for (let rans of ransomNote) {
		if (!map.hasOwnProperty(rans)) return false
		if (map[rans] === 0) return false
		map[rans] -= 1
	}

	return true
}
