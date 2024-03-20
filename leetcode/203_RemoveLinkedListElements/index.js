/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

// var removeElements = function(head, val) {
//     if(!head) return head

//     let current = new ListNode()
//     current.next = head
//     head = current

//     while(current.next !== null) {
//         if (current.next.val === val)
//             current.next = current.next.next
//         else current = current.next
//     }

//     return head.next
// };

var removeElements = function (head, val) {
	if (!head) return head

	const dummy = new ListNode()
	dummy.next = head
	let current = head
	let prev = dummy

	while (current) {
		if (current.val === val) prev.next = current.next
		else prev = current

		current = current.next
	}

	return dummy.next
}
