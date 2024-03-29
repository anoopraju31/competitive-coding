/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
	const operands = []

	for (let token of tokens) {
		if (token === '+' || token === '-' || token === '*' || token === '/') {
			let operand2 = operands.pop()
			let operand1 = operands.pop()
			let res

			if (token === '+') res = operand1 + operand2
			else if (token === '-') res = operand1 - operand2
			else if (token === '*') res = operand1 * operand2
			else res = parseInt(operand1 / operand2)

			operands.push(res)
		} else operands.push(parseInt(token))
	}

	return operands[0]
}
