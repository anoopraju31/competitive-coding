/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
	let l = 0

	while (l < flowerbed.length && n > 0) {
		if (
			flowerbed[l - 1] !== 1 &&
			flowerbed[l] !== 1 &&
			flowerbed[l + 1] !== 1
		) {
			flowerbed[l] = 1
			n--
		}
		l++
	}

	return n === 0
}
