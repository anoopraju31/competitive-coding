/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
	// check for initial state & target in deadends
	for (let deadend of deadends)
		if (deadend === target || deadend === '0000') return -1

	// Generate all the possible children for a lock
	const children = (lock) => {
		const res = []

		for (let i = 0; i < 4; i++) {
			// if the wheel turn clockwise
			let digit = (Number(lock[i]) + 1) % 10
			res.push(lock.slice(0, i) + digit + lock.slice(i + 1))

			// if the wheel turn anti-clockwise
			digit = (Number(lock[i]) - 1 + 10) % 10
			res.push(lock.slice(0, i) + digit + lock.slice(i + 1))
		}

		return res
	}

	const queue = []
	const visited = new Set(deadends)

	queue.push(['0000', 0])

	// BFS
	while (queue.length) {
		const [lock, turns] = queue.shift()

		if (lock === target) return turns

		const lockChildren = children(lock)

		for (const child of lockChildren) {
			if (visited.has(child)) continue

			visited.add(child)
			queue.push([child, turns + 1])
		}
	}

	return -1
}
