const getDigitSquareSum = (n) => {
	let sum = 0

	while (n > 0) {
		let d = n % 10
		sum += d * d
		n = Math.floor(n / 10)
	}

	return sum
}

var isHappy = function (n) {
	const set = new Set()
	while (n !== 1) {
		n = getDigitSquareSum(n)
		if (set.has(n)) return false
		set.add(n)
	}

	return true
}

const n = 19

console.log(isHappy(n))
