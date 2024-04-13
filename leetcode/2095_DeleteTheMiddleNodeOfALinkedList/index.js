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
var deleteMiddle = function (head) {
	let n = 0

	let current = head

	while (current) {
		current = current.next
		n++
	}

	if (n === 1) return null

	let mid = Math.floor(n / 2)

	current = head

	while (current) {
		if (mid === 1) {
			current.next = current.next.next
			current = current.next
			break
		}

		current = current.next
		mid--
	}

	return head
}
