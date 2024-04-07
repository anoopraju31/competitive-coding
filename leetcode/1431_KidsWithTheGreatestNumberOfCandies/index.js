/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
	let greatest = 0

	for (let candy of candies) greatest = Math.max(greatest, candy)

	const res = []
	for (let candy of candies) res.push(candy + extraCandies >= greatest)

	return res
}
