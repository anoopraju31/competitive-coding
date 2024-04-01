/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
	let current = head
	let count = 0

	while (current) {
		count++
		current = current.next
	}

	if (count === n) return head.next

	current = head

	while (current) {
		if (count === n + 1) {
			current.next = n !== 1 ? current.next.next : null
			break
		}

		current = current?.next
		count--
	}

	return head
}
