/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
	let s = head
	let f = head

	while (f && f.next) {
		f = f.next.next
		s = s.next
		if (s === f) return true
	}

	return false
}

// var hasCycle = function(head) {
//     let current = head
//     while (current) {
//         if (current.val === Infinity) return true
//         current.val = Infinity
//         current = current.next
//     }
//     return false

// }
