/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
	if (!head) return null

	let slow = head
	let fast = head

	while (fast.next && fast.next.next) {
		slow = slow.next
		fast = fast.next.next
	}

	let prev = null
	let current = slow.next
	slow.next = null
	let temp = null

	while (current) {
		temp = current.next
		current.next = prev
		prev = current
		current = temp
	}

	let first = head
	let second = prev

	while (second) {
		temp = first.next
		first.next = second
		first = second
		second = temp
	}
}
