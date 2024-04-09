/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
	let count = 0
	while (tickets[k] > 0) {
		for (let i = 0; i < tickets.length; i++) {
			if (tickets[i] === 0) continue

			tickets[i]--
			count++
			if (i === k && tickets[k] === 0) return count
		}
	}
}

var timeRequiredToBuy = function (tickets, k) {
	let count = 0

	for (let i = 0; i < tickets.length; i++)
		count +=
			Math.min(tickets[i], tickets[k]) +
			(i > k && tickets[k] <= tickets[i] ? -1 : 0)

	return count
}
