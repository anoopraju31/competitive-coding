/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
	if (!head) return head

	const lesserNodes = []
	const greaterNodesBeforeX = []
	const greaterNodesAfterX = []

	let current = head
	let isX = false

	while (current) {
		if (!isX && current.val === x) isX = true
		if (current.val < x) lesserNodes.push(current)
		if (current.val > x && !isX) greaterNodesBeforeX.push(current)
		if (current.val >= x && isX) greaterNodesAfterX.push(current)

		current = current.next
	}

	current = new ListNode()

	let h = current

	for (let i = 0; i < lesserNodes.length; i++) {
		current.next = lesserNodes[i]

		if (lesserNodes[i]?.next) lesserNodes[i].next = null

		current = lesserNodes[i]
	}

	for (let node of greaterNodesBeforeX) {
		current.next = node

		if (node?.next) node.next = null

		current = node
	}

	for (let node of greaterNodesAfterX) {
		current.next = node

		if (node?.next) node.next = null

		current = node
	}

	return h.next
}
