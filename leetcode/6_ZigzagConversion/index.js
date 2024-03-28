/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
	const ans = new Array(numRows).fill('')
	const n = s.length
	let i = 0

	while (i < n) {
		for (let j = 0; j < numRows && i < n; j++) ans[j] += s[i++]
		for (let j = numRows - 2; j > 0 && i < n; j--) ans[j] += s[i++]
	}

	let res = ''
	for (let str of ans) res += str

	return res
}
