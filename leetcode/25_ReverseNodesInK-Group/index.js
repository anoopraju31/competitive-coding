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
var reverseKGroup = function (head, k) {
	if (k === 1) return head

	let dummy = new ListNode(0, head)
	let groupPrev = dummy

	const getKth = (current, k) => {
		while (current && k > 0) {
			current = current.next
			k--
		}

		return current
	}

	while (true) {
		let kth = getKth(groupPrev, k)

		if (!kth) break

		let groupNext = kth.next
		prev = kth.next
		current = groupPrev.next

		while (current !== groupNext) {
			let temp = current.next
			current.next = prev
			prev = current
			current = temp
		}

		let temp = groupPrev.next
		groupPrev.next = kth
		groupPrev = temp
	}

	return dummy.next
}
