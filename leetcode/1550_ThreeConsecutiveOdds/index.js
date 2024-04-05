/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
	let l = 0

	while (l < arr.length - 2) {
		if (arr[l] % 2 === 0) l++
		else if (arr[l + 1] % 2 === 0) l += 2
		else if (arr[l + 2] % 2 === 0) l += 3
		else return true
	}

	return false
}
