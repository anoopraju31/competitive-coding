var groupAnagrams = function (strs) {
	let ordered = strs.map((str) => str.split('').sort().join())
	const map = {}

	for (let i = 0; i < ordered.length; i++) {
		if (!map[ordered[i]]) map[ordered[i]] = [strs[i]]
		else map[ordered[i]].push(strs[i])
	}

	return Object.values(map)
}

const input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
const output = groupAnagrams(input)

console.log(output)
