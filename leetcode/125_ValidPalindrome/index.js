const cleanUpString = (str) => {
	const char = 'abcdefghijklmnopqrstuvwxyz0123456789'
	let cleanStr = ''

	for (let i = 0; i < str.length; i++) {
		let lowerCaseCharacter = str[i].toLowerCase()

		if (char.indexOf(lowerCaseCharacter) !== -1) cleanStr += lowerCaseCharacter
	}

	return cleanStr
}

const isPalindrome = function (str) {
	const cleanStr = cleanUpString(str)

	let left = 0
	let right = cleanStr.length - 1

	while (left < right) {
		if (cleanStr[left] !== cleanStr[right]) return false

		left++
		right--
	}

	return true
}

const s = 'A man, a plan, a canal: Panama'

console.log(isPalindrome(s))
