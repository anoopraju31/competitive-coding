var countKeyChanges = function (s) {
	let sum = 0
	s = s.toLowerCase()

	for (let i = 0; i < s.length - 1; i++) {
		if (s[i] != s[i + 1]) sum += 1
	}

	return sum
}

console.log(countKeyChanges('aAbBcC'))
