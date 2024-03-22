/**
 * @param {string} s
 * @param {character} c
 * @return {number}
 */
// Brute Force Approach
// Time: O(n^2)
// Space: O(1)
var countSubstrings = function (s, c) {
	let count = 0

	for (let i = 0; i < s.length; i++)
		for (let j = i; j < s.length; j++) if (s[i] == c && s[j] == c) count++

	return count
}

// Optimized Approach
// Time: O(n)
// Space: O(1)
var countSubstrings = function (s, c) {
	let count = 0

	for (let i = 0; i < s.length; i++) if (s[i] === c) count++

	return (count * (count + 1)) / 2
}

// a b a d a
// _           1 a
// _____       2 a, aba
// _________   3 a, aba, abada
//  Total sub string = 1 + 2 + 3 = sum n natural numbers = x(x+1)/2
//
