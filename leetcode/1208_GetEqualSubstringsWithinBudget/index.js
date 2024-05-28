/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {
	const n = s.length
	let currentCost = 0
	let l = 0
	let res = 0

	for (let r = 0; r < n; r++) {
		currentCost += Math.abs(s.charCodeAt(r) - t.charCodeAt(r))

		while (currentCost > maxCost) {
			currentCost -= Math.abs(s.charCodeAt(l) - t.charCodeAt(l))
			l++
		}

		res = Math.max(res, r - l + 1)
	}

	return res
}
