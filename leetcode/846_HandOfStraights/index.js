/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
	if (hand.length % groupSize !== 0) return false

	const count = {}

	for (let n of hand) count[n] = (count[n] || 0) + 1

	const minH = Object.keys(count).map(Number)
	minH.sort((a, b) => a - b)

	while (minH.length > 0) {
		const first = minH[0]

		for (let i = first; i < first + groupSize; i++) {
			if (!(i in count)) return false

			count[i] -= 1

			if (count[i] === 0) {
				if (i !== minH[0]) return false

				minH.shift()
			}
		}
	}

	return true
}
