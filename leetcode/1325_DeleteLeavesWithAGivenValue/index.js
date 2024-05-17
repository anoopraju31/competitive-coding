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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function (root, target) {
	const traversal = (node) => {
		if (node && !node.left && !node.right) return node.val === target

		if (node?.left && traversal(node?.left)) node.left = null
		if (node?.right && traversal(node?.right)) node.right = null
		if (!node.left && !node.right) return node.val === target
	}

	const isTarget = traversal(root)

	return isTarget ? null : root
}
