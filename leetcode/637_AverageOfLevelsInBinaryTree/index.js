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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
	const queue = [[root, 0]]
	const levels = []

	while (queue.length) {
		const [node, level] = queue.shift()

		if (levels.length === level) levels.push([node.val, 1])
		else {
			levels[level][0] += node.val
			levels[level][1]++
		}

		if (node?.left) queue.push([node.left, level + 1])
		if (node?.right) queue.push([node.right, level + 1])
	}

	const res = []

	for (let [value, size] of levels) res.push(value / size)

	return res
}
