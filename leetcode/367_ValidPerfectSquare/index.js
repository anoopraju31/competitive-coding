/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
	let i = 1
	let sq = 1

	while (sq < num) {
		sq = i * i
		i++
	}

	return sq === num
}
