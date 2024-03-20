/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
	let current = list1
	let count = 0

	while (current) {
		count++
		if (count == a) break
		current = current.next
	}

	let prevA = current

	if (a !== b) {
		while (current) {
			count++
			if (count == b + 1) break
			current = current.next
		}
	}

	let prevB = current.next.next
	let current2 = list2

	while (current2) {
		prevA.next = current2
		current2 = current2.next
		prevA = prevA.next
	}

	prevA.next = prevB

	return list1
}
