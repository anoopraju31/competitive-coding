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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
// BFS
// Time: O(n)
// Space: O(n)
var addOneRow = function (root, val, depth) {
	if (depth === 1) return new TreeNode(val, root)

	const queue = []
	queue.push({ node: root, level: 1 })

	while (queue.length) {
		const { node, level } = queue.shift()

		if (level + 1 === depth) {
			let newNodeLeft = new TreeNode(val)
			let temp = node?.left
			node.left = newNodeLeft
			newNodeLeft.left = temp

			let newNodeRight = new TreeNode(val)
			temp = node?.right
			node.right = newNodeRight
			newNodeRight.right = temp
		}

		if (level === depth) return root
		if (node?.left) queue.push({ node: node.left, level: level + 1 })
		if (node?.right) queue.push({ node: node.right, level: level + 1 })
	}
}

// BFS
// Time: O(n)
// Space: O(n)
var addOneRow = function (root, val, depth) {
	if (depth === 1) return new TreeNode(val, root)

	const queue = []
	queue.push({ node: root, level: 1 })

	while (queue.length) {
		const { node, level } = queue.shift()

		if (level + 1 === depth) {
			node.left = new TreeNode(val, node?.left, null)
			node.right = new TreeNode(val, null, node?.right)
		}

		if (level === depth) return root
		if (node?.left) queue.push({ node: node.left, level: level + 1 })
		if (node?.right) queue.push({ node: node.right, level: level + 1 })
	}
}

// DFS
// Time: O(n)
// Space: O(n)
var addOneRow = function (root, val, depth) {
	if (depth === 1) return new TreeNode(val, root)

	const dfs = (node, level) => {
		if (!node) return
		if (level + 1 === depth && node) {
			node.left = new TreeNode(val, node?.left, null)
			node.right = new TreeNode(val, null, node?.right)
			return
		}

		dfs(node?.left, level + 1)
		dfs(node?.right, level + 1)
	}

	dfs(root, 1)

	return root
}
