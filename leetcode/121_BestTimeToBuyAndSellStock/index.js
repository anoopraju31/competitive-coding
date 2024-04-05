/**
 * @param {number[]} prices
 * @return {number}
 */
// // Brute Force
// // Time: (N^2)
// // Space: O(1)
// var maxProfit = function(prices) {
//     let profit = 0

//     for (let i = 0; i < prices.length - 1; i++)
//         for (let j = i + 1; j < prices.length; j++)
//             profit = Math.max(profit, prices[j] - prices[i])

//     return profit
// };

// Sliding Window
// Time: (N)
// Space: O(1)
var maxProfit = function (prices) {
	let profit = 0
	let l = 0
	let r = 0

	while (l < prices.length) {
		if (prices[l] <= prices[r]) profit = Math.max(profit, prices[r] - prices[l])
		else l = r
		r++
	}

	return profit
}
