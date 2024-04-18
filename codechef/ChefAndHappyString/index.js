function happyString(str) {
	let r = 0
	let count = 0

	while (r < str.length) {
		if (
			str[r] === 'a' ||
			str[r] === 'e' ||
			str[r] === 'i' ||
			str[r] === 'o' ||
			str[r] === 'u'
		)
			count++
		else count = 0

		if (count > 2) return 'Happy'

		r++
	}

	return 'Sad'
}

function addOne(tests) {
	let t = parseInt(tests[0])
	for (let i = 1; i < tests.length; i++) {
		let str = tests[i]

		console.log(happyString(str))
	}
}

process.stdin.setEncoding('utf8')
let input = ''
process.stdin.on('data', function (chunk) {
	input += chunk
})

process.stdin.on('end', function () {
	const tests = input.trim().split('\n')
	addOne(tests)
})

// Sample Input:
// 4
// aeiou
// abxy
// aebcdefghij
// abcdeeafg
