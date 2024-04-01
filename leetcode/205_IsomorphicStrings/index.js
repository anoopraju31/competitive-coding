/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Using Hash map
// Time: O(n)
// Space: O(n)
var isIsomorphic = function (s, t) {
	if (s === t) return true

	const n = s.length
	const mapS = {}
	const mapT = {}
	let i = 0

	while (i < n) {
		if (mapT.hasOwnProperty(t[i]) && mapT[t[i]] !== s[i]) return false
		if (mapS.hasOwnProperty(s[i]) && mapS[s[i]] !== t[i]) return false

		mapT[t[i]] = s[i]
		mapS[s[i]] = t[i]
		i++
	}

	return true
}

// Time: O(n^2)
// Space: O(1)
var isIsomorphic = function (s, t) {
	if (s.length !== t.length) return false

	for (let i = 0; i < s.length; i++)
		if (s.indexOf(s[i]) !== t.indexOf(t[i])) return false

	return true
}
