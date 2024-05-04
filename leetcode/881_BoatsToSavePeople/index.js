/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
	people.sort((a, b) => a - b)

	let l = 0
	let r = people.length - 1
	let boats = 0

	while (l <= r) {
		const remains = limit - people[r]
		r--
		boats++

		if (l <= r && remains >= people[l]) l++
	}

	return boats
}
