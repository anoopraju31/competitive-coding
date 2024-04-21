/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
// DFS
// Time: O(v + e)
// Space: O(v + e)
var validPath = function (n, edges, source, destination) {
	const graph = new Map()
	const visited = new Set()

	// Creating Adjacency List
	for (let [v, e] of edges) {
		if (graph.has(v)) graph.get(v).push(e)
		else graph.set(v, [e])

		if (graph.has(e)) graph.get(e).push(v)
		else graph.set(e, [v])
	}

	const dfs = (vertex) => {
		visited.add(vertex)

		let neighbours = graph.get(vertex)

		if (!neighbours || !neighbours.length) return

		for (let i = 0; i < neighbours.length; i++) {
			if (!visited.has(neighbours[i])) dfs(neighbours[i])
		}
	}

	dfs(source)

	return visited.has(destination)
}

// BFS
// Time: O(v + e)
// Space: O(v + e)
var validPath = function (n, edges, source, destination) {
	const graph = new Map()
	const visited = new Set()

	// Creating Adjacency List
	for (let [v, e] of edges) {
		if (graph.has(v)) graph.get(v).push(e)
		else graph.set(v, [e])

		if (graph.has(e)) graph.get(e).push(v)
		else graph.set(e, [v])
	}

	const queue = [source]
	visited.add(source)

	// BFS
	while (queue.length) {
		const vertex = queue.shift()

		if (vertex === destination) return true

		let neighbours = graph.get(vertex)

		for (let i = 0; i < neighbours.length; i++)
			if (!visited.has(neighbours[i])) {
				visited.add(neighbours[i])
				queue.push(neighbours[i])
			}
	}

	return false
}
