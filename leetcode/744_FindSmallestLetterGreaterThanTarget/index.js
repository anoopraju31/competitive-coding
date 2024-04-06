/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
// Binary Search
// Time: O(logn)
// Space: O(1)
var nextGreatestLetter = function (letters, target) {
	if (letters[letters.length - 1] <= target) return letters[0]

	let l = 0
	let r = letters.length - 1
	let mid

	while (l <= r) {
		mid = Math.floor((l + r) / 2)

		if (letters[mid] === target) {
			while (letters[mid] == target) mid++
			return letters[mid]
		} else if (letters[mid] < target) l = mid + 1
		else r = mid - 1
	}

	return letters[l]
}
