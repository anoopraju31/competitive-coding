/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
	if (n === 0) return 0
	if (n === 1 || n === 2) return 1

	let t0 = 0
	let t1 = 1
	let t2 = 1
	let current

	for (let i = 3; i <= n; i++) {
		current = t0 + t1 + t2
		t0 = t1
		t1 = t2
		t2 = current
	}

	return t2
}
