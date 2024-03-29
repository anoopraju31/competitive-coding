/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// Monotonics Stack
var dailyTemperatures = function (temperatures) {
	const stack = []
	const ans = new Array(temperatures.length)

	for (let i = 0; i < temperatures.length; i++) {
		while (stack.length > 0 && stack[stack.length - 1].temp < temperatures[i]) {
			let last = stack.pop()
			ans[last.idx] = i - last.idx
		}

		stack.push({ temp: temperatures[i], idx: i })
	}

	while (stack.length) {
		let last = stack.pop()
		ans[last.idx] = 0
	}

	return ans
}
