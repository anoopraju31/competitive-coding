var reverseString = function (s) {
	let start = 0
	let end = s.length - 1

	while (start < end) {
		let temp = s[start]
		s[start++] = s[end]
		s[end--] = temp
	}

	return s
}

const s = ['h', 'e', 'l', 'l', 'o']

console.log(reverseString(s))
