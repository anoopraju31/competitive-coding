/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
	const res = []

	for (let o of operations) {
		if (o === '+') res.push(res[res.length - 1] + res[res.length - 2])
		else if (o === 'D') res.push(res[res.length - 1] * 2)
		else if (o === 'C') res.pop()
		else res.push(parseInt(o))
	}

	return res.reduce((acc, val) => acc + val, 0)
}
