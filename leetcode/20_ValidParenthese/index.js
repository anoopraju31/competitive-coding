var isValid = function (s) {
	if (s.length % 2 === 1 || s[0] === ')' || s[0] === '}' || s[0] === ']')
		return false

	let arr = []

	for (let c of s) {
		if (c === '(') arr.push(')')
		else if (c === '{') arr.push('}')
		else if (c === '[') arr.push(']')
		else if (c !== arr[arr.length - 1]) return false
		else arr.pop()
	}

	return arr.length === 0
}

console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('(]'))
