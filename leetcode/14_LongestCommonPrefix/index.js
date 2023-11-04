var longestCommonPrefix = function (strs) {
	let prefix = ''

	for (let i = 0; i < strs[0].length; i++) {
		for (let s of strs) if (i === s.length || strs[0][i] !== s[i]) return prefix
		prefix += strs[0][i]
	}

	return prefix
}

strs = ['flower', 'flow', 'flight']

console.log(longestCommonPrefix(strs))
