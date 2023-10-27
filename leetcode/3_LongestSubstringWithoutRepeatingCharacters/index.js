const lengthOfLongestSubstring = function (s) {
	let n = s.length
	if (n === 0) return 0

	let longestSubString = 0
	let set = new Set()
	let left = 0
	let right = 0

	while (right < n) {
		let char = s[right]

		if (!set.has(char)) {
			set.add(char)
			longestSubString = Math.max(longestSubString, set.size)
			right++
		} else {
			set.delete(s[left])
			left++
		}
	}

	return longestSubString
}

const s = 'abcabcbb'

console.log(lengthOfLongestSubstring(s))
