/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
	deck.sort((a, b) => a - b)

	const res = new Array(deck.length).fill(0)
	const q = Array.from({ length: deck.length }, (_, i) => i)

	for (let n of deck) {
		let i = q.shift()
		res[i] = n
		if (q) q.push(q.shift())
	}

	return res
}
