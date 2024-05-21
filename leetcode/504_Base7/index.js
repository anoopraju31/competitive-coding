/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
	if (num <= 6 && num >= -6) return num.toString()

	const isNegative = num < 0

	if (isNegative) num = -num

	let str = ''
	let rem

	while (num) {
		rem = num % 7
		str = rem + str
		num = (num - rem) / 7
	}

	return isNegative ? '-' + str : str
}
