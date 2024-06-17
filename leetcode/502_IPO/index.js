/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
const findMaximizedCapital = (k, w, profits, capital) => {
	let maxProfit = []
	let minCapital = []

	for (let i = 0; i < capital.length; i++)
		minCapital.push([capital[i], profits[i]])

	minCapital.sort((a, b) => a[0] - b[0])

	for (let i = 0; i < k; i++) {
		while (minCapital.length > 0 && minCapital[0][0] <= w) {
			let [c, p] = minCapital.shift()
			maxProfit.push(p)
		}

		maxProfit.sort((a, b) => b - a)

		if (maxProfit.length === 0) break

		w += maxProfit.shift()
	}

	return w
}
