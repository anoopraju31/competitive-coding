const longestPalindromicSubstring = (s) => {
	let maxLength = 0
	let str = ''

	const helper = (left, right) => {
		while (left >= 0 && right < s.length && s[left] == s[right]) {
			if (right - left >= maxLength) {
				maxLength = right - left
				str = s.slice(left, right + 1)
			}
			left--
			right++
		}
	}

	for (let i = 0; i < s.length; i++) {
		let left = i
		let right = i

		helper(left, right)
		helper(left, right + 1)
	}

	return str
}

const s = 'babad'

console.log(longestPalindromicSubstring(s))
