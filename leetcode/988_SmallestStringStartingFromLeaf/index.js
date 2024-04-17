/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */

// DFS solution
var smallestFromLeaf = function (root) {
	let minVal = ''

	const dfs = (node, val) => {
		let newVal = String.fromCharCode(97 + node.val) + val

		if (!node?.left && !node?.right && (!minVal || newVal < minVal))
			minVal = newVal
		if (node?.left) dfs(node.left, newVal)
		if (node?.right) dfs(node.right, newVal)
	}

	dfs(root, '')

	return minVal
}

// BFS solution
var smallestFromLeaf = function (root) {
	let minVal = ''

	const queue = []
	queue.push([root, ''])

	while (queue.length) {
		const [node, val] = queue.shift()
		const newVal = String.fromCharCode(97 + node.val) + val

		if (!node?.left && !node?.right && (!minVal || minVal > newVal))
			minVal = newVal
		if (node?.left) queue.push([node.left, newVal])
		if (node?.right) queue.push([node.right, newVal])
	}

	return minVal
}
