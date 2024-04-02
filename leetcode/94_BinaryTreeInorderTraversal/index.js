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
var inorderTraversal = function (root) {
	if (!root) return []
	const traversal = []
	const left = inorderTraversal(root.left)
	const right = inorderTraversal(root.right)

	if (left) traversal.push(...left)
	traversal.push(root.val)
	if (right) traversal.push(...right)

	return traversal
}

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
var inorderTraversal = function (root) {
	if (!root) return []

	const traversal = []

	const inorder = (root) => {
		if (!root) return null

		inorder(root.left)
		traversal.push(root.val)
		inorder(root.right)
	}

	inorder(root)

	return traversal
}
