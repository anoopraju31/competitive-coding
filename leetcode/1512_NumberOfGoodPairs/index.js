/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
	const dist = {}

	for (let n of nums) dist[n] = dist.hasOwnProperty(n) ? dist[n] + 1 : 1

	let count = 0

	for (let n of nums) {
		dist[n] -= 1
		count += dist[n]
	}

	return count
}

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])) // 4
