/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function (position, m) {
	const INF = 10 ** 20
	const good = (target) => {
		let balls = 0
		let lastBasket = -INF

		for (const b of position)
			if (b - lastBasket >= target) {
				balls++
				lastBasket = b
			}

		return balls >= m
	}

	position.sort((a, b) => a - b)

	let l = 0
	let r = position[position.length - 1] - position[0]

	while (l < r) {
		let mid = Math.floor((l + r + 1) / 2)

		if (good(mid)) l = mid
		else r = mid - 1
	}

	return l
}
