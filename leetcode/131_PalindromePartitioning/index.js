/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
	const n = s.length
	const res = []
	const partition = []

	const isPalindrome = (str, l, r) => {
		while (l < r) if (str[l++] !== str[r--]) return false
		return true
	}

	const dfs = (idx) => {
		if (idx >= n) {
			res.push(partition.slice(0))
			return
		}

		for (let i = idx; i < n; i++)
			if (isPalindrome(s, idx, i)) {
				partition.push(s.slice(idx, i + 1))
				dfs(i + 1)
				partition.pop()
			}
	}

	dfs(0)

	return res
}
