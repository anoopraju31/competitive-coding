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

// iterative
var reverseList = function (head) {
	if (!head) return head

	let prev = null
	let current = head
	let next = current.next

	while (current) {
		next = current.next
		current.next = prev
		prev = current
		current = next
	}

	return prev
}

// recursive
var reverseList = function (head) {
	if (!head || !head.next) {
		return head
	}

	let reversedListHead = reverseList(head.next)

	head.next.next = head
	head.next = null

	return reversedListHead
}
