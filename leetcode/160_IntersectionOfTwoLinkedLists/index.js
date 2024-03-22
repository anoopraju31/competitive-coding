/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// using hash set()
// time: O(n)
// space: O(n)
var getIntersectionNode = function (headA, headB) {
	if (!headA || !headB) return null

	let currentA = headA
	let currentB = headB

	const arr = []

	while (currentA) {
		arr.push(currentA)
		currentA = currentA.next
	}

	const set = new Set(arr)

	while (currentB) {
		if (set.has(currentB)) return currentB
		currentB = currentB.next
	}

	return null
}

// time: O(m + n)
// space: O(1)
// the loop will run m+n time
var getIntersectionNode = function (headA, headB) {
	if (!headA || !headB) return null

	let currentA = headA
	let currentB = headB

	while (currentA !== currentB) {
		currentA = currentA === null ? headB : currentA.next
		currentB = currentB === null ? headA : currentB.next
	}

	return currentA
}
