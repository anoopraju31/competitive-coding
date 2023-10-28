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
