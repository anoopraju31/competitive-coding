/**
 * @param {number} x
 * @return {boolean}
 */
// Converting to string
// Time: O(n)
var isPalindrome = function (x) {
	if (x < 0) return false
	if (x < 10) return true

	let x = String(x)
	let l = 0
	let r = x.length - 1

	while (l <= r) if (x[l++] !== x[r--]) return false

	return true
}

// Without Converting to String
var isPalindrome = function (x) {
	if (x < 0) return false
	if (x < 10) return true

	let rev = 0
	let n = x

	while (n !== 0) {
		rev = rev * 10 + (n % 10)
		n = Math.floor(n / 10)
	}

	return rev === x
}
