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
var swapPairs = function (head) {
	if (!head?.next) return head

	let start = head.next
	let current = head
	let prev = null

	while (current && current.next) {
		let temp = current.next
		current.next = current.next.next || null
		temp.next = current

		if (prev) prev.next = temp

		prev = current
		current = temp
		current = temp.next.next
	}

	return start
}
