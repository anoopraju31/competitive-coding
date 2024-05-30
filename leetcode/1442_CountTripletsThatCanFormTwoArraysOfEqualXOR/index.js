/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function (arr) {
	let n = arr.length + 1
	let res = 0,
		prefix = new Array(n)

	// prefix XOR of the array
	prefix[0] = 0

	for (let i = 1; i < n; ++i) prefix[i] = arr[i - 1] ^ prefix[i - 1]

	for (let i = 0; i < n; ++i)
		for (let j = i + 1; j < n; ++j)
			// counting how many pairs have the same prefix value
			if (prefix[i] == prefix[j]) res += j - i - 1

	return res
}
