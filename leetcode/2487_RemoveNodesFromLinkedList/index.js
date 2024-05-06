/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function (head) {
	const stack = []
	stack.push(head)

	let current = head?.next

	while (current) {
		while (stack.length && stack[stack.length - 1].val < current.val)
			stack.pop()

		stack.push(current)
		current = current.next
	}

	let newHead = stack[0]
	current = newHead

	for (let i = 1; i < stack.length; i++) {
		current.next = stack[i]
		current = stack[i]
	}

	return newHead
}
