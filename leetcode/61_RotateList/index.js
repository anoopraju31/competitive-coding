/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
	if (!head || k === 0) return head

	let count = 0
	let current = head
	let prev = head

	while (current) {
		prev = current
		current = current.next
		count++
	}

	k = k % count
	let l = count - k

	if (l === 0 || k === 0) return head

	current = head

	while (current) {
		if (l === 1) {
			let temp = current.next
			current.next = null
			prev.next = head
			return temp
		}

		current = current.next
		l--
	}
}
