/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
	if (n <= 0) return []
	if (n === 1) return [0]

	const degree = new Array(n).fill(0)
	const adjacencyList = new Array(n)

	for (let i = 0; i < n; i++) adjacencyList[i] = []

	// Creating adjacency list and degree
	for (let e of edges) {
		degree[e[0]]++
		degree[e[1]]++

		adjacencyList[e[0]].push(e[1])
		adjacencyList[e[1]].push(e[0])
	}

	const queue = []

	// Pushing all the left nodes to the queue
	for (let i = 0; i < n; i++) if (degree[i] === 1) queue.push(i)

	while (n > 2) {
		let size = queue.length
		n -= size

		while (size > 0) {
			const v = queue.shift()

			for (const i of adjacencyList[v]) {
				degree[i]--
				if (degree[i] === 1) queue.push(i)
			}

			size--
		}
	}

	return queue
}
