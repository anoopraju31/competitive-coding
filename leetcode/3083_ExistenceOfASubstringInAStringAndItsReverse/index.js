/**
 * @param {string} s
 * @return {boolean}
 */
// Brute Force Approach
// Time: O(n^2)
// Space: O(1)
var isSubstringPresent = function (s) {
	if (s.length === 1) return false
	if (s.length === 2) return s[0] === s[1]

	const rs = s.split('').reverse().join('')
	const n = s.length

	for (let i = 0; i < n - 1; i++)
		for (let j = 0; j < n - 1; j++)
			if (s[i] === rs[j] && s[i + 1] === rs[j + 1]) return true

	return false
}

// Using a set to store substring
// Time: O(n)
// Space: O(n)
var isSubstringPresent = function (s) {
	if (s.length === 1) return false
	if (s.length === 2) return s[0] === s[1]

	const rs = s.split('').reverse().join('')
	const n = s.length

	const arr = []
	for (let i = 0; i < n - 1; i++) arr.push(s.slice(i, i + 2))

	const set = new Set(arr)

	for (let i = 0; i < n - 1; i++) if (set.has(rs.slice(i, i + 2))) return true

	return false
}
