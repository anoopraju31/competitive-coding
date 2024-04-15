/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
	const getDigitSum = (num) => {
		let sum = 0

		while (num) {
			sum += num % 10
			num = Math.floor(num / 10)
		}

		return sum
	}

	const map = {}

	while (lowLimit <= highLimit) {
		const sum = getDigitSum(lowLimit)
		map[sum] = map.hasOwnProperty(sum) ? map[sum] + 1 : 1
		lowLimit++
	}

	let max = 0

	for (let key of Object.keys(map)) if (map[key] > max) max = map[key]

	return max
}
