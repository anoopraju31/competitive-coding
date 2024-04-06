var reverseVowels = function (s) {
	const idxs = []

	for (let i = 0; i < s.length; i++)
		if ('aeiouAEIOU'.includes(s[i])) idxs.push(i)

	let left = 0
	let right = idxs.length - 1
	const strArray = s.split('')

	while (left < right) {
		const temp = strArray[idxs[left]]
		strArray[idxs[left++]] = strArray[idxs[right]]
		strArray[idxs[right--]] = temp
	}

	return strArray.join('')
}

const s = 'hello'
console.log(reverseVowels(s))

// Approach 2
const isVowel = (c) =>
	c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u'

var reverseVowels = function (s) {
	str = s.split('')
	let l = 0
	let r = s.length - 1

	while (l < r) {
		let sl = s[l].toLowerCase()
		let sr = s[r].toLowerCase()

		if (!isVowel(sl)) l++
		if (!isVowel(sr)) r--

		if (isVowel(sl) && isVowel(sr)) {
			let temp = str[l]
			str[l] = str[r]
			str[r] = temp
			r--
			l++
		}
	}

	return str.join('')
}
