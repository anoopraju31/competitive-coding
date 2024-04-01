/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
	const strs = s.split(' ')

	if (pattern.length !== strs.length) return false

	const mapP = {}
	const mapS = {}

	for (let i = 0; i < s.length; i++) {
		if (mapP.hasOwnProperty(pattern[i]) && mapP[pattern[i]] !== strs[i])
			return false
		if (mapS.hasOwnProperty(strs[i]) && mapS[strs[i]] !== pattern[i])
			return false
		mapP[pattern[i]] = strs[i]
		mapS[strs[i]] = pattern[i]
	}

	return true
}
