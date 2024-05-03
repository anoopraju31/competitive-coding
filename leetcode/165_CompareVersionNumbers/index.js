/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
	const v1 = version1.split('.').map((val) => Number(val))
	const v2 = version2.split('.').map((val) => Number(val))

	if (v1[0] < v2[0]) return -1
	if (v1[0] > v2[0]) return 1

	let i = 1
	let j = 1

	while (i < v1.length && j < v2.length) {
		while (v1[i] === 0 && v2[j] === 0) {
			j++
			i++
		}

		if (i === v1.length || j === v2.length) break
		if (v1[i] > v2[j]) return 1
		if (v1[i] < v2[j]) return -1

		i++
		j++
	}

	while (i < v1.length) {
		while (v1[i] === 0) i++

		if (i === v1.length) return 0
		else return 1
	}

	while (j < v2.length) {
		while (v2[j] === 0) j++

		if (j === v2.length) return 0
		else return -1
	}

	return 0
}
