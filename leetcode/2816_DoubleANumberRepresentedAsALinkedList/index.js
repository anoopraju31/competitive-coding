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
var doubleIt = function (head) {
	let num = []
	let current = head

	// Retriving digits
	while (current) {
		num.push(current.val)
		current = current.next
	}

	// multiplying by 2
	let carry = 0
	for (let i = num.length - 1; i >= 0; i--) {
		let d = carry + Number(num[i]) * 2
		num[i] = d % 10
		carry = d > 9 ? 1 : 0
	}

	if (carry) num.unshift(carry)

	current = head
	let prev = null

	// inserting the doubled num
	for (let digit of num) {
		if (current) {
			current.val = digit
			prev = current
			current = current.next
		} else {
			prev.next = new ListNode(digit)
			prev = prev.next
		}
	}

	return head
}

var doubleIt = function (head) {
	let current = head

	if (head.val >= 5) {
		let newNode = new ListNode(1)
		newNode.next = head
		head = newNode
	}

	while (current) {
		current.val =
			((current.val * 2) % 10) + (current.next && current.next.val >= 5)
		current = current.next
	}

	return head
}
