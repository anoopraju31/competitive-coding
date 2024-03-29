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
// Recursive
var isSymmetric = function (root) {
	const sym = (root1, root2) => {
		if (!root1 && !root2) return true
		if (!root1 || !root2) return false
		if (root1.val !== root2.val) return false
		return sym(root1.left, root2.right) && sym(root1.right, root2.left)
	}

	return sym(root, root)
}

// Iterative
const isSymmetric = (root) => {
	if (!root) return false

	const stack = []

	stack.push(root)
	stack.push(root)

	while (stack.length) {
		let root2 = stack.pop()
		let root1 = stack.pop()

		if (!root1 && !root2) continue
		if (!root1 || !root2 || root1.val !== root2.val) return false

		stack.push(root1.left)
		stack.push(root2.right)
		stack.push(root1.right)
		stack.push(root2.left)
	}

	return true
}
