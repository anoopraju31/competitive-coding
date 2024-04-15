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
 * @return {number}
 */
var sumNumbers = function (root) {
	let sum = 0

	const dfs = (root, path) => {
		if (root.left === null && root.right === null)
			sum += Number(path + root.val)
		if (root.left !== null) dfs(root.left, path + root.val)
		if (root.right !== null) dfs(root.right, path + root.val)
	}

	dfs(root, '')

	return sum
}
