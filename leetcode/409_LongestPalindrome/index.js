/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
	const map = []

	for (let i of s)
		if (map.hasOwnProperty(i)) delete map[i]
		else map[i] = 1

	if (Object.keys(map).length > 0) return s.length - Object.keys(map).length + 1
	else return s.length
}

// var longestPalindrome = function(s) {
//     const map = []

//     for (let i of s)
//         map[i] = map.hasOwnProperty(i)? map[i] + 1 : 1

//     let count = 0
//     let isSingle = 0

//     for (let k of Object.keys(map)) {
//         if (Math.floor(map[k] /2) > 0) {
//             let t = map[k] - (map[k] % 2 === 0? 0 : 1)
//             count += t
//             map[k] -= t
//         }
//         if (!isSingle && map[k] === 1) isSingle = true
//     }

//     if (isSingle) count++

//     return count
// };
