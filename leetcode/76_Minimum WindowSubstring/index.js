var minWindow = function (s, t) {
	if (t.length === 0 || t.length > s.length) return ''
	if (s === t) return s

	let map = new Map()

	for (let letter of t) {
		map.set(letter, map.has(letter) ? map.get(letter) + 1 : 1)
	}

	let minLength = Infinity
	let minWindow = ''
	let start = 0
	let end = 0
	let count = map.size

	while (end < s.length) {
		let rl = s[end]

		if (map.has(rl)) {
			map.set(rl, map.get(rl) - 1)
			if (map.get(rl) == 0) count--
		}

		end++

		while (count === 0) {
			if (end - start < minLength) {
				minLength = end - start
				minWindow = s.slice(start, end)
			}

			let ll = s[start]

			if (map.has(ll)) {
				map.set(ll, map.get(ll) + 1)
				if (map.get(ll) > 0) count++
			}

			start++
		}
	}

	return minWindow
}

const s = 'ADOBECODEBANC'
const t = 'ABC'

console.log('res -> ', minWindow(s, t))
