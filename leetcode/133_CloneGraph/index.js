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
