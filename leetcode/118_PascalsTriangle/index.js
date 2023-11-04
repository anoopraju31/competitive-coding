var generate = function (numRows) {
	let res = []

	if (numRows >= 1) res.push([1])
	if (numRows >= 2) res.push([1, 1])

	for (let i = 2; i < numRows; i++) {
		let temp = [1]
		let j = 1

		while (j < i) {
			let s = res[i - 1][j] + res[i - 1][j - 1]
			temp.push(s)
			j++
		}

		res.push([...temp, 1])
	}

	return res
}

console.log(generate(5))
console.log(generate(1))
console.log(generate(6))
