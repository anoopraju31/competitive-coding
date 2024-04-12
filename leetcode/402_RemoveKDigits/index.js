// Monotonic Stack
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
const removeKdigits = function (num, k) {
	if (num.length === k) return '0'

	const stack = []

	for (let n of num) {
		while (stack.length && k && stack[stack.length - 1] > n) {
			stack.pop()
			k--
		}

		stack.push(n)
	}

	while (k) {
		stack.pop()
		k--
	}

	while (stack.length > 1 && stack[0] === '0') stack.shift()

	return stack.join('')
}

const nums = ['1432219', '10200', '10']
const k = [3, 1, 2]

for (let i = 0; i < nums.length; i++) console.log(removeKdigits(nums[i], k[i]))
