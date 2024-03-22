/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var reverseList = function (head) {
	if (!head) return head

	let reversed = null
	while (head) {
		const newNode = new ListNode(head.val)
		newNode.next = reversed
		reversed = newNode
		head = head.next
	}

	return reversed
}

var isPalindrome = function (head) {
	if (!head) return false

	let current = head
	let revList = reverseList(current)

	while (current && revList) {
		if (current.val !== revList.val) return false
		current = current.next
		revList = revList.next
	}

	return true
}
