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
var sortList = function (head) {
	if (!head) return head

	const nums = []
	let current = head

	while (current) {
		nums.push(current)
		current = current.next
	}

	nums.sort((a, b) => a.val - b.val)

	current = nums[0]

	if (current?.next) current.next = null

	let h = current

	for (let i = 1; i < nums.length; i++) {
		current.next = nums[i]

		if (nums[i]?.next) nums[i].next = null

		current = nums[i]
	}

	return h
}
