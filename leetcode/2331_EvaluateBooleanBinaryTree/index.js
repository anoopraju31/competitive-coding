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
 * @return {boolean}
 */
var evaluateTree = function (root) {
	const traverse = (node) => {
		if (!node.left && !node.right) return node.val

		const leftVal = traverse(node.left)
		const rightVal = traverse(node.right)

		if (node.val === 2) {
			if (leftVal || rightVal) return true
			return false
		}

		if (node.val === 3) {
			if (leftVal && rightVal) return true
			return false
		}
	}

	return traverse(root)
}
