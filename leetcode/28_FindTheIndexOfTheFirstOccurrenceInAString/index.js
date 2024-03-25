/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	const n = needle.length
	const h = haystack.length
	let i = 0
	let j = 0
	let check = true

	while (i < h - n + 1) {
		if (haystack[i] === needle[0]) {
			j = i + 1
			check = true
			while (j < i + n) {
				if (needle[j - i] !== haystack[j]) {
					check = false
					break
				}
				j++
			}

			if (check) return i
		}

		i++
	}

	return -1
}

var strStr = function (haystack, needle) {
	const n = needle.length
	const h = haystack.length
	let sub = ''
	for (let i = 0; i < h - n + 1; i++) {
		sub = haystack.substr(i, n)
		if (sub === needle) return i
	}
	return -1
}
