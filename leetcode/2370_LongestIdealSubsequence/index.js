/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestIdealString = function (s, k) {
	const n = s.length
	let ans = 0
	const memo = new Array(26).fill(0)

	for (let i = 0; i < n; i++) {
		let maxLength = 0

		for (let last = 97; last <= 122; last++)
			if (Math.abs(s[i].charCodeAt(0) - last) <= k)
				maxLength = Math.max(maxLength, memo[last - 97] + 1)

		memo[s[i].charCodeAt(0) - 97] = maxLength
		ans = Math.max(ans, maxLength)
	}

	return ans
}
