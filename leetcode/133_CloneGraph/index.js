/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
	const visited = {}

	const dfs = (node) => {
		// Base Cases
		if (!node) return node
		if (visited.hasOwnProperty(node.val)) return visited[node.val]

		const newNode = new Node(node.val)
		visited[node.val] = newNode

		for (const neighbor of node.neighbors) {
			newNode.neighbors.push(dfs(neighbor))
		}

		return newNode
	}

	return dfs(node)
}

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
	const visited = {}

	const dfs = (node) => {
		// Base Cases
		if (!node) return node
		if (!!visited[node.val]) return visited[node.val]

		const newNode = new Node(node.val)
		visited[node.val] = newNode

		for (const neighbor of node.neighbors) {
			newNode.neighbors.push(dfs(neighbor))
		}

		return newNode
	}

	return dfs(node)
}

// BFS
var cloneGraph = function (node) {
	if (!node) return node

	const visited = new Map()
	const newNode = new Node(node.val)
	const queue = [node]

	visited.set(node.val, newNode)

	while (queue.length) {
		const currentNode = queue.shift()

		for (const neighbor of currentNode.neighbors) {
			if (!visited.has(neighbor.val)) {
				const newNode = new Node(neighbor.val)
				visited.set(neighbor.val, newNode)
				queue.push(neighbor)
			}

			visited.get(currentNode.val).neighbors.push(visited.get(neighbor.val))
		}
	}

	return newNode
}
